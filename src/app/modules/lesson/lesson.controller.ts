import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { createLessonDB } from "./lesson.service";

export const createLesson: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createLessonDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Lesson created successfully",
    data: result,
  });
});
