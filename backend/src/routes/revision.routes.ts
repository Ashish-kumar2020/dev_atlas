import express from "express";
import {
  createRevisionController,
  fetchRevisionController,
  deleteRevisionController,
} from "../controllers/revision.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const revisionRouter = express.Router();

revisionRouter.post("/", authMiddleware, createRevisionController);
revisionRouter.get("/:user_id", authMiddleware, fetchRevisionController);
revisionRouter.delete("/:revision_id", authMiddleware, deleteRevisionController);

export default revisionRouter;