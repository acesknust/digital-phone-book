import { AnyZodObject, ZodEffects } from "zod";

export const validateData =
	<FormDataType>(schema: AnyZodObject | ZodEffects<AnyZodObject, FormDataType>) =>
	async (data: FormDataType) => {
		try {
			await schema.parseAsync(data);
			return true;
    } catch (error) {
      console.log(error);
			return false;
		}
	};
