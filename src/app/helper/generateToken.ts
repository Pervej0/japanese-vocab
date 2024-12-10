import jwt from "jsonwebtoken";
import { TJwtPayload } from "../type/global.type";

const generateToken = (
  payload: TJwtPayload,
  secret: string,
  expiresIn: string
) => {
  const token = jwt.sign(payload, secret, {
    expiresIn,
  });
  return token;
};

export default generateToken;
