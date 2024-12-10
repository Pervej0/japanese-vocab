import { z } from "zod";

export const lessonValidationSchema = z.object({
  body: z.object({
    lessonName: z.string({ required_error: "lessonName is required." }),
  }),
});

export const lessonValidationSchemaUpdate = z.object({
  body: z.object({
    lessonName: z.string({ required_error: "lessonName is required." }),
    lessonNumber: z
      .number({ required_error: "Lesson number is required." })
      .min(1, "Lesson number must be at least 1.")
      .optional(),
  }),
});
