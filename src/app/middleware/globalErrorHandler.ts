import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import handledZodError from "../error/handledzodError";
import { Prisma } from "@prisma/client";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = StatusCodes.BAD_REQUEST;
  let success = false;
  let message = "Something Went Wrong";
  let errorDetails = err;

  if (err instanceof Error) {
    message = err.message;
    errorDetails = err;
  }
  if (err instanceof ZodError) {
    const customSimplifiedError = handledZodError(err);
    message = customSimplifiedError?.message;
    errorDetails = customSimplifiedError?.errorDetails;
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Validation Error";
    errorDetails = err?.message as any;
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error";
      errorDetails = err.meta as any;
    }
  }

  res.status(statusCode).json({ success, message, errorDetails });

  next();
};

export default globalErrorHandler;
