import express from "express";
import { createBookmarkController, deleteBookmarkController, fetchUserBookmarkController, updateUserBookmarkController } from "../controllers/bookmarks.controller.js";

const bookmarkRouter = express.Router();

bookmarkRouter.post("/",createBookmarkController)
bookmarkRouter.get("/:user_id",fetchUserBookmarkController)
bookmarkRouter.patch("/:bookmark_id",updateUserBookmarkController);
bookmarkRouter.delete("/:bookmark_id",deleteBookmarkController);

export default bookmarkRouter;