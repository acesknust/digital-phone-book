import Joi from "joi";

const createStudentSchema = Joi.object({
  referenceNumber: Joi.string().required(),
  year: Joi.string().required(),
});

export const validateCreateStudentSchema = (req: any, res: any, next: any) => {
  const { error } = createStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ error: "Invalid payload in the request body" });
  next();
};

const updateStudentSchema = Joi.object({
  name: Joi.string().required(),
  nickname: Joi.string().optional(),
  image: Joi.string().required(),
  quote: Joi.string().required(),
  referenceNumber: Joi.string().required(),
});

export const validateUpdateStudentSchema = (req: any, res: any, next: any) => {
  const { error } = updateStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ error: "Invalid payload in the request body" });
  next();
};

// Define a Joi schema for validating the year parameter
const yearParamSchema = Joi.number().integer().min(2022).required();

export const validateYearParameter = (req: any, res: any, next: any) => {
  const { error } = yearParamSchema.validate(req.params.year);
  if (error) return res.status(400).json({ error: "Invalid payload in the request parameters" });
  next();
};

const studentReferenceNumberPayloadSchema = Joi.object({
  referenceNumbers: Joi.array()
    .items(Joi.string().required()) // Validate that each item is a required string
    .required(), // Ensure the array itself is required
});

export const validateStudentReferenceNumberPayloadSchema = (req: any, res: any, next: any) => {
  const { error } = studentReferenceNumberPayloadSchema.validate(req.body);
  if (error) return res.status(400).json({ error: "Invalid payload in the request body" });
  next();
};
