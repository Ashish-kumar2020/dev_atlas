import express from "express";
import { createBookmarkCategoryController, deleteBookmarkCategoryController, fetchUserBookmarkCategoryController, updateUserBookmarkCategoryController } from "../controllers/bookmark_category.controller.js";

const bookmarkCategoryRouter = express.Router();

bookmarkCategoryRouter.post("/", createBookmarkCategoryController);
bookmarkCategoryRouter.get("/:user_id", fetchUserBookmarkCategoryController);
bookmarkCategoryRouter.patch("/:bookmark_category_id",updateUserBookmarkCategoryController);
bookmarkCategoryRouter.delete("/:bookmark_category_id",deleteBookmarkCategoryController )

export default bookmarkCategoryRouter;