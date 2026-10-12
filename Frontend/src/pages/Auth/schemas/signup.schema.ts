import { z } from "zod";

export const signupSchema = z
  .object({
    user_name: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters long"),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Invalid email format"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;