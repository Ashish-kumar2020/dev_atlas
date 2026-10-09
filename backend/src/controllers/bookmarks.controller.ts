
import type {Request, Response} from "express";
import { createBookmarkService, deleteBookmarkService, fetchUserBookmarkService, updateBookmarkService } from "../services/bookmarks.service.js";


// --------------------------- CREATE BOOKMARK CONTROLLER ----------------------
export const createBookmarkController = async(req:Request, res:Response) =>{
    try {
        const {user_id, title, bookmark_link, category_id} = req.body;
        if(!user_id || !title || !bookmark_link){
            return res.status(400).json({
                message: "All Fields are Required"
            });
        }

        const bookmarksData = await createBookmarkService(user_id, title, bookmark_link, category_id);
        if(!bookmarksData){
            return res.status(400).json({
                message: "Error while adding the link"
            });
        }
        return res.status(201).json({
            message: "Bookamrk Added Successfully",
            bookmarksData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// ------------------------- FETCH USERS SPECIFIC BOOKMARKS ----------------------------
export const fetchUserBookmarkController = async (req:Request, res: Response) => {

    try {
         const {user_id} = req.params;
        if(typeof user_id !== "string"){
            return res.status(400).json({
                message: "User id is required"
            });
        }

        const userBookmarkData = await fetchUserBookmarkService(user_id); 
        if(userBookmarkData.length === 0){
            return res.status(400).json({
                message: "No bookmarks found for this user"
            });
        }   
        return res.status(200).json({
            message: "Bookmark fetched successfully",
            userBookmarkData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
   
}

// ------------------------- UPDATE BOOKMARK CONTROLLER ----------------------------
export const updateUserBookmarkController = async(req: Request, res: Response) => {
    try {
        const {bookmark_id} = req.params;
        if(typeof bookmark_id !== "string"){
            return res.status(400).json({
                message: "Bookmark Id is required"
            })
        }
        const {user_id, title, bookmark_link,category_id} = req.body;
        if(!user_id){
            return res.status(400).json({
                message: "User Id is Required"
            });
        }
        const updatedBookmarkData = await updateBookmarkService(bookmark_id,user_id,title,bookmark_link,category_id);
        if(!updatedBookmarkData){
            return res.status(400).json({
                message: "Bookmark not found"
            });
        }
        return res.status(200).json({
            message: "Bookmark update successfully",
            updatedBookmarkData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// -------------------------- DELETE BOOKMARK CONTROLLER -------------------------
export const deleteBookmarkController = async (req:Request, res: Response) => {
    try {
        const {bookmark_id} = req.params;
        if(typeof bookmark_id !== "string"){
            return res.status(400).json({
                message: "Bookmark Id is required"
            })
        }
        const {user_id} = req.body;
        if(!user_id ){
            return res.status(400).json({
                message: "User id is required"
            });
        }

        const userBookmarkData = await deleteBookmarkService(bookmark_id,user_id);
        if(!userBookmarkData){
            return res.status(404).json({
                message: "No Data Found"
            });
        }
        return res.status(200).json({
            message: "Bookmark deleted Successfully",
            userBookmarkData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}