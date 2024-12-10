import express, { Request, Response } from "express";
import cors from "cors";
import rootRoute from "./app/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(rootRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to Server Site",
  });
});

export default app;
