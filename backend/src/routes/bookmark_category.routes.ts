import express from "express";
import { createBookmarkCategoryController, deleteBookmarkCategoryController, fetchUserBookmarkCategoryController, updateUserBookmarkCategoryController } from "../controllers/bookmark_category.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const bookmarkCategoryRouter = express.Router();

bookmarkCategoryRouter.post("/", authMiddleware, createBookmarkCategoryController);
bookmarkCategoryRouter.get("/:user_id", authMiddleware, fetchUserBookmarkCategoryController);
bookmarkCategoryRouter.patch("/:bookmark_category_id",authMiddleware, updateUserBookmarkCategoryController);
bookmarkCategoryRouter.delete("/:bookmark_category_id",authMiddleware, deleteBookmarkCategoryController )

export default bookmarkCategoryRouter;