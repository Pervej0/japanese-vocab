import bcrypt from "bcrypt";
import config from "../../config";
import { JwtPayload } from "jsonwebtoken";
import generateToken from "../../helper/generateToken";
import prisma from "../../shared/prisma";

export const loginUserDB = async (payload: {
  email: string;
  password: string;
}) => {
  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const comparePassword = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );

  if (!comparePassword) {
    throw new Error("Please, Enter correct password!");
  }

  const tokenPayload = {
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const accessToken = await generateToken(
    tokenPayload,
    config.ACCESS_TOKEN_SECRET as string,
    config.ACCESS_TOKEN_EXPIRES_IN as string
  );

  const refreshToken = await generateToken(
    tokenPayload,
    config.REFRESH_TOKEN_SECRET as string,
    config.REFRESH_TOKEN_EXPIRES_IN as string
  );

  return {
    refreshToken,
    data: {
      id: isUserExist.id,
      name: isUserExist.name,
      email: isUserExist.email,
      token: accessToken,
    },
  };
};

export const changePasswordDB = async (
  user: JwtPayload,
  payload: { newPassword: string; oldPassword: string }
) => {
  const getUser = await prisma.user.findUniqueOrThrow({
    where: { email: user.email },
  });

  const comparePassword = await bcrypt.compare(
    payload.oldPassword,
    getUser.password
  );

  if (!comparePassword) {
    throw new Error("Please, Enter correct password!");
  }
  const hashPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.SALT_ROUND) as number
  );

  await prisma.user.update({
    where: {
      email: getUser.email,
    },
    data: {
      password: hashPassword,
    },
  });

  return "updatePassword";
};
