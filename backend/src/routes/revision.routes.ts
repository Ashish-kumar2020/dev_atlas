import express from "express";
import {
  createRevisionController,
  fetchRevisionController,
  deleteRevisionController,
} from "../controllers/revision.controller.js";

const revisionRouter = express.Router();

revisionRouter.post("/", createRevisionController);
revisionRouter.get("/:user_id", fetchRevisionController);
revisionRouter.delete("/:revision_id", deleteRevisionController);

export default revisionRouter;