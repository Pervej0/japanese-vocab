import express, { Request, Response } from "express";
import cors from "cors";
import rootRoute from "./app/routes";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app = express();

app.use(cors());
app.use(express.json());
app.use(rootRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to Server Site",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
