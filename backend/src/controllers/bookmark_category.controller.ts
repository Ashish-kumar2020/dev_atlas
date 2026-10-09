import type { Request, Response } from "express";
import {
  createBookmarkCategoryService,
  deleteBookmarkCategoryService,
  fetchAllBookmarkCategoryService,
  updateBookmarkCategoryService,
} from "../services/bookmark_category.service.js";

// ----------------------- CREATE BOOKMARK CATEGORY ----------------------
export const createBookmarkCategoryController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { user_id, category_name } = req.body;
    if (!user_id || !category_name) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }
    const bookmarkCategoryData = await createBookmarkCategoryService(
      user_id,
      category_name,
    );
    if (!bookmarkCategoryData) {
      return res.status(400).json({
        message: "Error while adding the category",
      });
    }
    return res.status(201).json({
      message: "Bookmark Category created successfully",
      bookmarkCategoryData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ---------------------- FETCH USER SPECIFIC BOOKMARK CATEGORY -----------------------
export const fetchUserBookmarkCategoryController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { user_id } = req.params;
    if (typeof user_id !== "string") {
      return res.status(400).json({
        message: "User id is required",
      });
    }

    const usersBookmarkCategoriesData =
      await fetchAllBookmarkCategoryService(user_id);
    if (usersBookmarkCategoriesData.length === 0) {
      return res.status(400).json({
        message: "No Bookmark Category found for this user",
      });
    }
    return res.status(200).json({
      message: "Bookmark Category fetched successfully",
      usersBookmarkCategoriesData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ------------------- UPDATE BOOKMARK CATEGORY CATEGORY -----------------------
export const updateUserBookmarkCategoryController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { bookmark_category_id } = req.params;
    if (typeof bookmark_category_id !== "string") {
      return res.status(400).json({
        message: "Bookmark Category Id is required",
      });
    }
    const { user_id, category_name } = req.body;
    if (!user_id) {
      return res.status(400).json({
        message: "User Id is Required",
      });
    }
    const updatedBookmarkCategoryData = await updateBookmarkCategoryService(user_id, bookmark_category_id, category_name);
    if(!updatedBookmarkCategoryData){
        return res.status(404).json({
            message: "Bookmark Category not found"
        });
    }
    return res.status(200).json({
        message: "Bookmark category updated successfully",
        updatedBookmarkCategoryData
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// -------------------------- DELETE BOOKMARK CATEGORY CONTROLLER -------------------------
export const deleteBookmarkCategoryController = async (req:Request, res: Response) => {
    try {
        const {bookmark_category_id} = req.params;
        if(typeof bookmark_category_id !== "string"){
            return res.status(400).json({
                message: "Bookmark Category Id is required"
            })
        }
        const {user_id} = req.body;
        if(!user_id ){
            return res.status(400).json({
                message: "User id is required"
            });
        }

        const userBookmarkCategoryData = await deleteBookmarkCategoryService(bookmark_category_id,user_id);
        if(!userBookmarkCategoryData){
            return res.status(404).json({
                message: "Bookmark category not found",
            });
        }
        return res.status(200).json({
            message: "Bookmark Category deleted Successfully",
            userBookmarkCategoryData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}