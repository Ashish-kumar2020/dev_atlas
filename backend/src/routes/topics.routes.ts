
import express from "express";
import topicsController from "../controllers/topics.controller.js";

const topicRouter = express.Router();

topicRouter.post("/topics", topicsController);

export default topicRouter;