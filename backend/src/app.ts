import express, { type Request, type Response } from "express";
import notesRouter from "./routes/notes.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();
app.use(express.json());
app.use("/notes", notesRouter);
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to DevAtlas API");
});

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
  });
});

app.get("/about", (req: Request, res: Response) => {
  res.json({
    name: "DevAtlas",
    version: "1.0.0",
  });
});

export default app;
