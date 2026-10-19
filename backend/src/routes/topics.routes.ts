
import express from "express";
import { createTopicController, deleteTopicController, fetchAllTopicsController, updateTopicController } from "../controllers/topics.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const topicRouter = express.Router();

topicRouter.post("/",  authMiddleware,createTopicController);
topicRouter.patch("/:topic_id", authMiddleware,updateTopicController);
topicRouter.delete("/:topic_id", authMiddleware,deleteTopicController)
topicRouter.get("/", authMiddleware,fetchAllTopicsController)
export default topicRouter;