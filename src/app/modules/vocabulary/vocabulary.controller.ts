import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createVocabularyDB,
  deleteVocabularyDB,
  getAllVocabularyDB,
  updateVocabularyDB,
} from "./vocabulary.service";

export const createVocabulary: RequestHandler = asyncCatch(
  async (req: any, res) => {
    const result = await createVocabularyDB(req.user, req.body);
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: "Vocabulary created successfully",
      data: result,
    });
  }
);

export const getAllVocabulary: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllVocabularyDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Vocabulary retrieved successfully",
    data: result,
  });
});

export const updateVocabulary: RequestHandler = asyncCatch(async (req, res) => {
  const result = await updateVocabularyDB(req.params.lessonId, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Vocabulary updated successfully",
    data: result,
  });
});
export const deleteVocabulary: RequestHandler = asyncCatch(async (req, res) => {
  const result = await deleteVocabularyDB(req.params.lessonId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Vocabulary deleted successfully",
    data: result,
  });
});
