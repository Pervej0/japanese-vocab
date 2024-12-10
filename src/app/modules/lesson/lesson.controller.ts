import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createLessonDB,
  deleteLessonDB,
  getAllLessonDB,
  updateLessonDB,
} from "./lesson.service";

export const createLesson: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createLessonDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Lesson created successfully",
    data: result,
  });
});

export const getAllLesson: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllLessonDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Lessons retrieved successfully",
    data: result,
  });
});

export const updateLesson: RequestHandler = asyncCatch(async (req, res) => {
  const result = await updateLessonDB(req.params.lessonId, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Lessons updated successfully",
    data: result,
  });
});
export const deleteLesson: RequestHandler = asyncCatch(async (req, res) => {
  const result = await deleteLessonDB(req.params.lessonId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Lessons deleted successfully",
    data: result,
  });
});
