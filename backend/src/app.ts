import express, { type Request, type Response } from "express";
import notesRouter from "./routes/notes.routes.js";
import authRouter from "./routes/auth.routes.js";
import subjectRouter from "./routes/subjects.routes.js";
import topicRouter from "./routes/topics.routes.js";
import bookmarkRouter from "./routes/bookmarks.routes.js";
import bookmarkCategoryRouter from "./routes/bookmark_category.routes.js";

const app = express();
app.use(express.json());
app.use("/notes", notesRouter);
app.use("/auth", authRouter);
app.use("/subject", subjectRouter);
app.use("/topic",topicRouter);
app.use("/bookmark",bookmarkRouter);
app.use("/bookmark-category", bookmarkCategoryRouter)

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
