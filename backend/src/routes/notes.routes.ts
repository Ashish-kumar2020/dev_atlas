import express, { type Request, type Response } from "express";

const router = express.Router();
router.get("/:id", (req: Request, res: Response) => {
  const noteId = req.params.id;
  res.json({
    message: "Note fetched successfully",
    noteId: noteId,
  });
});

router.get("/", (req: Request, res: Response) => {
  const tagReceived = req.query.tag;
  const limit = req.query.limit;
  res.json({
    message: "Note fetched successfully",
    tag: tagReceived,
    limit: limit,
  });
});

export default router;
