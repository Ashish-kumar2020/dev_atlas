import express from "express";
import { createBookmarkController, deleteBookmarkController, fetchUserBookmarkController, updateUserBookmarkController } from "../controllers/bookmarks.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const bookmarkRouter = express.Router();

bookmarkRouter.post("/",authMiddleware, createBookmarkController)
bookmarkRouter.get("/:user_id",authMiddleware, fetchUserBookmarkController)
bookmarkRouter.patch("/:bookmark_id",authMiddleware, updateUserBookmarkController);
bookmarkRouter.delete("/:bookmark_id",authMiddleware, deleteBookmarkController);

export default bookmarkRouter;