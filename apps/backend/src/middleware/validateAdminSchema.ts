import Joi from "joi";

const loginSchemaForAdmin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const validateAdminLoginAndSignUpSchema = (req: any, res: any, next: any) => {
  const { error } = loginSchemaForAdmin.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};
