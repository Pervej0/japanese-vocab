import { z } from "zod";

export const lessonValidationSchema = z.object({
  lessonName: z.string().nonempty("Lesson name must not be empty."),
  lessonNumber: z
    .number({ required_error: "Lesson number is required." })
    .min(1, "Lesson number must be at least 1."),
});
