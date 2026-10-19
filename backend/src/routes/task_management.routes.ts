import express from "express";
import { createTaskController, deleteTaskController, fetchAllTaskController, updateTaskController } from "../controllers/task_managemnet.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const taskRouter = express.Router();

taskRouter.post("/", authMiddleware,createTaskController);
taskRouter.get("/:user_id", authMiddleware,fetchAllTaskController);
taskRouter.patch("/:task_id", authMiddleware,updateTaskController);
taskRouter.delete("/:task_id", authMiddleware,deleteTaskController);

export default taskRouter;

