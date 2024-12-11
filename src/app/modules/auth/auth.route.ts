import express, { Request, Response, NextFunction } from "express";
import {
  allUsers,
  changePassword,
  loginUser,
  registerUser,
  updateUser,
} from "./auth.controller";
import { userRole } from "@prisma/client";
import auth from "../../middleware/auth";
import validationChecker from "../../middleware/validationChecker";
import { userValidationSchema } from "./auth.validation";
import { upload } from "../../middleware/uploadFile";
const router = express.Router();

router.get("/users", auth(userRole.ADMIN), allUsers);
router.put("/users/update/:userId", updateUser);
router.post("/login", loginUser);
router.post(
  "/register",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body.data, "ppp");
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationChecker(userValidationSchema),
  registerUser
);

router.post(
  "/change-password",
  auth(userRole.ADMIN, userRole.USER),
  changePassword
);
const authRouter = router;

export default authRouter;
