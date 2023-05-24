import { z } from "zod";

export const contactFormValidator = z.object({
  name: z.string().nonempty("Name field is required"),
  email: z.string().nonempty("Email field is required").email("Invalid email"),
  phone: z.string().optional(),
  message: z
    .string()
    .nonempty("Message field is required")
    .min(10, "Message must be at least 10 characters long"),
});
