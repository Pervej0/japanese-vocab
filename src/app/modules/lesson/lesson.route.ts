import express from "express";
import validationChecker from "../../middleware/validationChecker";
import { lessonValidationSchema } from "./lesson.validation";
import {
  createLesson,
  deleteLesson,
  getAllLesson,
  updateLesson,
} from "./lesson.controller";
const router = express.Router();

router.get("/lessons", getAllLesson);
router.post(
  "/create-lesson",
  validationChecker(lessonValidationSchema),
  createLesson
);
router.put(
  "/update-lesson/:lessonId",
  validationChecker(lessonValidationSchema),
  updateLesson
);
router.delete("/delete-lesson/:lessonId", deleteLesson);

const lessonRoutes = router;
export default lessonRoutes;
