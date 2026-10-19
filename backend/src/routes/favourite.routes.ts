import express from "express";

import {
  createFavouriteController,
  fetchAllFavouriteController,
  deleteFavouriteController,
} from "../controllers/favourite.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const favouriteRouter = express.Router();

favouriteRouter.post("/", authMiddleware, createFavouriteController);
favouriteRouter.get("/:user_id", authMiddleware, fetchAllFavouriteController);
favouriteRouter.delete("/:favourite_id", authMiddleware, deleteFavouriteController);

export default favouriteRouter;