import type { Request, Response } from "express";

import {
  createFavouriteService,
  fetchAllFavouriteService,
  deleteFavouriteService,
} from "../services/favourite.service.js";

// 1. Create Favourite
export const createFavouriteController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id, note_id, bookmark_id, topic_id } = req.body;

    if (!user_id) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    // Exactly one item ID must be provided
    const itemIds = [note_id, bookmark_id, topic_id];

    const providedItemIds = itemIds.filter(
      (itemId) => itemId !== undefined && itemId !== null && itemId !== ""
    );

    if (providedItemIds.length !== 1) {
      return res.status(400).json({
        message:
          "Provide exactly one of note_id, bookmark_id, or topic_id",
      });
    }

    const favouriteData = await createFavouriteService(
      user_id,
      note_id,
      bookmark_id,
      topic_id
    );

    return res.status(201).json({
      message: "Favourite created successfully",
      favourite: favouriteData,
    });
  } catch (error) {
    console.error("Error creating favourite:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// 2. Fetch All Favourites for a User
export const fetchAllFavouriteController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id } = req.params;

    if (typeof user_id !== "string" || !user_id) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const favouriteData = await fetchAllFavouriteService(user_id);

    return res.status(200).json({
      message: "Favourites fetched successfully",
      favourites: favouriteData,
    });
  } catch (error) {
    console.error("Error fetching favourites:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// 3. Delete Favourite
export const deleteFavouriteController = async (
  req: Request,
  res: Response
) => {
  try {
    const { favourite_id } = req.params;

    if (typeof favourite_id !== "string" || !favourite_id) {
      return res.status(400).json({
        message: "Favourite ID is required",
      });
    }

    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const deletedFavourite = await deleteFavouriteService(
      favourite_id,
      user_id
    );

    if (!deletedFavourite) {
      return res.status(404).json({
        message: "Favourite not found",
      });
    }

    return res.status(200).json({
      message: "Favourite deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting favourite:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};