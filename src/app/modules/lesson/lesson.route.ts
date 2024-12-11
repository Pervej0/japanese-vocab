import express from "express";
import validationChecker from "../../middleware/validationChecker";
import {
  lessonValidationSchema,
  lessonValidationSchemaUpdate,
} from "./lesson.validation";
import {
  createLesson,
  deleteLesson,
  getAllLesson,
  getSingleLesson,
  updateLesson,
} from "./lesson.controller";
const router = express.Router();

router.get("/lessons", getAllLesson);
router.get("/lessons/:lessonId", getSingleLesson);
router.post(
  "/create-lesson",
  validationChecker(lessonValidationSchema),
  createLesson
);
router.put(
  "/update-lesson/:lessonId",
  validationChecker(lessonValidationSchemaUpdate),
  updateLesson
);
router.delete("/delete-lesson/:lessonId", deleteLesson);

const lessonRoutes = router;
export default lessonRoutes;
