
import express from "express";
import { createTopicController, deleteTopicController, fetchAllTopicsController, updateTopicController } from "../controllers/topics.controller.js";

const topicRouter = express.Router();

topicRouter.post("/", createTopicController);
topicRouter.patch("/:topic_id",updateTopicController);
topicRouter.delete("/:topic_id",deleteTopicController)
topicRouter.get("/",fetchAllTopicsController)
export default topicRouter;