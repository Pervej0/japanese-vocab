import { userRole } from "@prisma/client";

export type TRegister = {
  name: string;
  email: string;
  password: string;
  photo: string;
  role: userRole;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TTokenPayload = {
  fullName: string;
  email: string;
};
