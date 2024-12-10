import express from "express";
import validationChecker from "../../middleware/validationChecker";
import { lessonValidationSchema } from "./lesson.validation";
import { createLessonDB } from "./lesson.service";
const router = express.Router();

router.post(
  "/create-lesson",
  validationChecker(lessonValidationSchema),
  createLessonDB
);
