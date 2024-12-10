import express from "express";
import authRouter from "../modules/auth/auth.route";
import lessonRoutes from "../modules/lesson/lesson.route";
import vocabularyRoute from "../modules/vocabulary/vocabulary.route";

const router = express.Router();

const allRoutes = [
  {
    route: authRouter,
  },
  {
    route: lessonRoutes,
  },
  {
    route: vocabularyRoute,
  },
];

allRoutes.forEach((rt) => router.use("/api/v1", rt.route));

const rootRoute = router;
export default rootRoute;
