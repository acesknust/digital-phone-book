import { Request, Response } from "express";
import Joi from "joi";
import { ObjectId } from "typeorm";

const obejctIdSchema = Joi.string().custom((value, helpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
    }
    return value;
}, 'ObjectID');

export const validateObjectId = async (req: Request, res: Response, next: Function) => {
    const schema = Joi.object({
        id: obejctIdSchema.required(),
    });

    const { error } = schema.validate(req.params.id);

    if (error) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }

    next()
}