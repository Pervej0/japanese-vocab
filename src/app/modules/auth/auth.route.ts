import express from "express";
import {
  changePassword,
  loginUser,
  registerUser,
  updateUser,
} from "./auth.controller";
import { userRole } from "@prisma/client";
import auth from "../../middleware/auth";
import validationChecker from "../../middleware/validationChecker";
import { userValidationSchema } from "./auth.validation";
const router = express.Router();

router.post("/users", loginUser);
router.put("/users/update/:userId", updateUser);
router.post("/login", loginUser);
router.post("/register", validationChecker(userValidationSchema), registerUser);

router.post(
  "/change-password",
  auth(userRole.ADMIN, userRole.USER),
  changePassword
);
const authRouter = router;

export default authRouter;
