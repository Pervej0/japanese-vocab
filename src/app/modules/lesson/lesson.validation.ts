import { z } from "zod";

export const lessonValidationSchema = z.object({
  body: z.object({
    lessonName: z.string({ required_error: "lessonName is required." }),
  }),
});
