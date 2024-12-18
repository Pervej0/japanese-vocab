import { RequestHandler } from "express";
import {
  allUsersDB,
  changePasswordDB,
  loginUserDB,
  registerUserDB,
  updateUserDB,
} from "./auth.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../shared/sendResponse";
import asyncCatch from "../../shared/asyncCatch";

export const allUsers: RequestHandler = asyncCatch(async (req: any, res) => {
  const result = await allUsersDB();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

export const updateUser: RequestHandler = asyncCatch(async (req: any, res) => {
  const result = await updateUserDB(req.params.userId, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User role updated successfully",
    data: result,
  });
});

export const registerUser: RequestHandler = asyncCatch(async (req, res) => {
  const result = await registerUserDB(req.body, req.file);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

export const loginUser: RequestHandler = asyncCatch(async (req, res) => {
  const result = await loginUserDB(req.body);
  res.cookie("refreshToken", result.refreshToken);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User logged in successfully",
    data: result.data,
  });
});

export const changePassword: RequestHandler = asyncCatch(
  async (req: any, res) => {
    const result = await changePasswordDB(req.user, req.body);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User Password Changed successfully!",
      data: result,
    });
  }
);
