import { NextFunction, Request, Response } from "express";
import config from "../config";
import { JwtPayload, Secret } from "jsonwebtoken";
import decodedToken from "../helper/decodedToken";
import prisma from "../shared/prisma";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("Unauthorized Access");
      }
      const decode = decodedToken(
        token,
        config.ACCESS_TOKEN_SECRET as Secret
      ) as JwtPayload;

      if (Object.entries(decode).length < 1) {
        throw new Error("Unauthorized Access");
      }

      const userCredentials = await prisma.user.findUniqueOrThrow({
        where: { email: decode?.email },
      });

      if (roles.length && !roles.includes(userCredentials.role)) {
        throw new Error("Forbidden To Access!");
      }

      req.user = decode;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
