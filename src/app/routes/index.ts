import express from "express";
import authRouter from "../modules/auth/auth.route";
import lessonRoutes from "../modules/lesson/lesson.route";

const router = express.Router();

const allRoutes = [
  {
    route: authRouter,
  },
  {
    route: lessonRoutes,
  },
];

allRoutes.forEach((rt) => router.use("/api/v1", rt.route));

const rootRoute = router;
export default rootRoute;
