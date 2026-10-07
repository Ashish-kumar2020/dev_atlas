import type { Request, Response } from "express";
import { topicCreationService } from "../services/topics.service.js";


// ------------------- TOPICS CONTROLLER -----------------------

export default async (req: Request, res: Response) => {
  try {
    const {subject_id, topic_name, description,parent_topic_id} = req.body;
    if(!subject_id || !topic_name){
      return res.status(400).json({
        message: "All Fields are required"
      });
    }

    const topicCreation = await topicCreationService(subject_id,topic_name, description, parent_topic_id);

    if(!topicCreation){
      return res.status(400).json({
        message: "Error while creating the topic"
      });
    }

    return res.status(201).json({
      message: "Topic created successfully",
      topicCreation
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
};
