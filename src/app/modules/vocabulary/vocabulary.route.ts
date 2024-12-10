import express from "express";
import validationChecker from "../../middleware/validationChecker";
import {
  createVocabulary,
  deleteVocabulary,
  getAllVocabulary,
  updateVocabulary,
} from "./vocabulary.controller";
import {
  vocabularyValidationSchema,
  vocabularyValidationSchemaUpdate,
} from "./vocabulary.validation";
import auth from "../../middleware/auth";
import { userRole } from "@prisma/client";

const router = express.Router();

router.get("/vocabularies", getAllVocabulary);
router.post(
  "/create-vocabulary",
  auth(userRole.ADMIN),
  validationChecker(vocabularyValidationSchema),
  createVocabulary
);
router.put(
  "/update-lesson/:lessonId",
  validationChecker(vocabularyValidationSchemaUpdate),
  updateVocabulary
);
router.delete("/delete-lesson/:lessonId", deleteVocabulary);

const vocabularyRoute = router;
export default vocabularyRoute;
