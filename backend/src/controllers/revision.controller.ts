import type { Request, Response } from "express";
import {
  createRevisionService,
  fetchRevisionService,
  deleteRevisionService,
} from "../services/revision.service.js";

// Create Revision
export const createRevisionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id, topic_id } = req.body;

    if (!user_id || !topic_id) {
      return res.status(400).json({
        message: "User ID and Topic ID are required",
      });
    }

    const revision = await createRevisionService(user_id, topic_id);
    if(!revision){
        return res.status(404).json({
            message: "Error While Updating The topic to revision tracker"
        })
    }
    return res.status(201).json({
      message: "Topic added to revision tracker successfully",
      revision,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Fetch Revision Topics
export const fetchRevisionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id } = req.params;

    if (typeof user_id !== "string") {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const revisions = await fetchRevisionService(user_id);
     if(revisions.length === 0){
        return res.status(200).json({
            message: "No Data Found"
        })
    }
    return res.status(200).json({
      message: "Revision topics fetched successfully",
      revisions,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Delete Revision
export const deleteRevisionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { revision_id } = req.params;
    const { user_id } = req.body;
    if(typeof revision_id !== "string"){
        return res.status(400).json({
            message: "Revision ID is required"
        })
    }
    if (!user_id) {
      return res.status(400).json({
        message: "User ID are required",
      });
    }

    const deletedRevision = await deleteRevisionService(
      revision_id,
      user_id
    );

    if (!deletedRevision) {
      return res.status(404).json({
        message: "Revision record not found",
      });
    }

    return res.status(200).json({
      message: "Revision record deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};