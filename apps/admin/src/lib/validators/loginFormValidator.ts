import * as z from "zod";
export const loginFormSchema = z
	.object({
		email: z
			.string({
				required_error: "Email is required",
			})
			.email("Invalid email address"),
		password: z
			.string({
				required_error: "Password is required",
			})
			.min(8)
			.max(120),
	})
	.required();

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
