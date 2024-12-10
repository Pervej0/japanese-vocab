import { z } from "zod";

export const vocabularyValidationSchema = z.object({
  body: z.object({
    word: z
      .string()
      .min(1, { message: "Word is required and cannot be empty." }),
    pronunciation: z
      .string()
      .min(1, { message: "Pronunciation is required and cannot be empty." }),
    whenToSay: z
      .string()
      .min(1, { message: "WhenToSay is required and cannot be empty." }),
    adminEmail: z
      .string()
      .email({ message: "AdminEmail must be a valid email address." }),
  }),
});

export const vocabularyValidationSchemaUpdate = z.object({
  body: z.object({
    word: z
      .string()
      .min(1, { message: "Word is required and cannot be empty." })
      .optional(),
    pronunciation: z
      .string()
      .min(1, { message: "Pronunciation is required and cannot be empty." })
      .optional(),
    whenToSay: z
      .string()
      .min(1, { message: "WhenToSay is required and cannot be empty." })
      .optional(),
    adminEmail: z
      .string()
      .email({ message: "AdminEmail must be a valid email address." })
      .optional(),
  }),
});
