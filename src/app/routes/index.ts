import express from "express";
import authRouter from "../modules/auth/auth.route";

const router = express.Router();

const allRoutes = [
  {
    route: authRouter,
  },
];

allRoutes.forEach((rt) => router.use("/api/v1", rt.route));

const rootRoute = router;
export default rootRoute;
