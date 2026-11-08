import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Please add a subject" })
    .max(150, { message: "Subject must be under 150 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto link with the message pre-filled, safely encoded. */
export function buildMailto(to: string, data: ContactInput) {
  const body = `${data.message}\n\n— ${data.name} (${data.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
}
