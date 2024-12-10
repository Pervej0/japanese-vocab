import express from "express";
import { changePassword, loginUser } from "./auth.controller";
import { userRole } from "@prisma/client";
import auth from "../../middleware/auth";
const router = express.Router();

router.post("/login", loginUser);

router.post(
  "/change-password",
  auth(userRole.ADMIN, userRole.USER),
  changePassword
);
const authRouter = router;

export default authRouter;
