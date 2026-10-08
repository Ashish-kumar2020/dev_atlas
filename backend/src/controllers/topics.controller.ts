import type { Request, Response } from "express";
import { deleteTopicService, fetchAllTopicsService, topicCreationService, updateTopicService } from "../services/topics.service.js";


// ------------------- CREATE TOPICS CONTROLLER -----------------------
export const createTopicController = async (req: Request, res: Response) => {
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

// ------------------- UPDATE TOPIC CONTROLLER -------------------------
export const updateTopicController = async (req: Request, res: Response) => {
  try {
      const {topic_id} = req.params;
      if(typeof topic_id !== "string"){
        return res.status(400).json({
          message: "Topic id is Required"
        });
      }
      const {topic_name, description} = req.body;
      const updatedTopics = await updateTopicService(topic_id, topic_name,description);
      if(!updatedTopics){
        return res.status(404).json({
          message: "No Topic Found"
        });
      }
      return res.status(200).json({
        message: "Topic Updated Successfully",
        updatedTopics
      })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }


}

// ------------------- DELETE TOPIC CONTROLLER ------------------------
export const deleteTopicController = async (req: Request, res: Response) => {
  try {
    const {topic_id} = req.params;
    if(typeof topic_id !== "string"){
      return res.status(400).json({
        message: "Topic Id is Required"
      });
    }

    const deletedTopics = await deleteTopicService(topic_id);
    if(!deletedTopics.length){
      return res.status(404).json({
        message: "No Topic Found"
      });
    }
    return res.status(200).json({
      message: "Topic Deleted Successfully",
      deletedTopics
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

// ------------------- FETCH ALL TOPICS CONTROLLER---------------------
export const fetchAllTopicsController = async (req: Request, res: Response) => {
  try {
    
    const allTopics = await fetchAllTopicsService();
    if(allTopics.length === 0){
      return res.status(404).json({
        message: "No Topic Found"
      });
    }

    return res.status(200).json({
      message: "All Topic Fetched Successfully",
      allTopics
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}