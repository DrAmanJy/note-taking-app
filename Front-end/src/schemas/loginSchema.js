import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[0-9]/, "Password must include at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must include at least one special character"
  );

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export default loginSchema;
