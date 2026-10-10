import express from "express";

import {
  createFavouriteController,
  fetchAllFavouriteController,
  deleteFavouriteController,
} from "../controllers/favourite.controller.js";

const favouriteRouter = express.Router();

favouriteRouter.post("/", createFavouriteController);
favouriteRouter.get("/:user_id", fetchAllFavouriteController);
favouriteRouter.delete("/:favourite_id", deleteFavouriteController);

export default favouriteRouter;