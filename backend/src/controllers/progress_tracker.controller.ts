import type {Request, Response} from "express";


import {
  updateProgressService,
  getParentTopicProgressService,
  getUserProgressService,
} from "../services/progress_tracker.service.js";

export const updateProgressController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id, topic_id } = req.body;

    if (!user_id || !topic_id) {
      return res.status(400).json({
        message: "user_id and topic_id are required",
      });
    }

    const result = await updateProgressService({
      user_id,
      topic_id,
    });

    const parentTopic = await getParentTopicProgressService(
      user_id,
      topic_id
    );

    return res.status(200).json({
      message: "Topic marked as completed successfully",
      data: {
        ...result,
        parent_topic: parentTopic,
      },
    });
  } catch (error) {
    console.error("Update progress error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }

}


export const getProgressController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id } = req.params;

    if (typeof user_id !== "string") {
      return res.status(400).json({
        message: "user_id is required",
      });
    }

    const result = await getUserProgressService(user_id);

    return res.status(200).json({
      message: "Progress fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get progress error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};