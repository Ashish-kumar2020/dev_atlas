import express from "express";
import { createTaskController, deleteTaskController, fetchAllTaskController, updateTaskController } from "../controllers/task_managemnet.controller.js";

const taskRouter = express.Router();

taskRouter.post("/", createTaskController);
taskRouter.get("/:user_id", fetchAllTaskController);
taskRouter.patch("/:task_id", updateTaskController);
taskRouter.delete("/:task_id", deleteTaskController);

export default taskRouter;

