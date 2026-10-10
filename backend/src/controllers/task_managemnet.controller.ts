import type { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  fetchAllTaskService,
  updateTaskService,
} from "../services/task_managemnet.service.js";

// ---------------------------- CREATE TASK CONTROLLER ---------------------------------
export const createTaskController = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      task_title,
      task_description,
      status,
      priority,
      due_date,
    } = req.body;

    if (
      !user_id ||
      !task_title ||
      !task_description ||
      !status ||
      !priority ||
      !due_date
    ) {
      return res.status(400).json({
        message: "All Fields are mandatory",
      });
    }

    const taskData = await createTaskService(
      user_id,
      task_title,
      task_description,
      status,
      priority,
      due_date,
    );
    if (!taskData) {
      return res.status(404).json({
        message: "Error while creating the task",
      });
    }
    return res.status(201).json({
      message: "Task is Successfully created",
      taskData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ---------------------------- UPDATE TASK CONTROLLER ------------------------------
export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const { task_id } = req.params;
    if (typeof task_id !== "string") {
      return res.status(400).json({
        message: "Task Id is Required",
      });
    }

    const {
      user_id,
      task_title,
      task_description,
      status,
      priority,
      due_date,
    } = req.body;
    if (!user_id) {
      return res.status(400).json({
        message: "User_id is required",
      });
    }
    if (
      task_title === undefined &&
      task_description === undefined &&
      status === undefined &&
      priority === undefined &&
      due_date === undefined
    ) {
      return res.status(400).json({
        message: "At least one field is required to update the task",
      });
    }

    const updatedTask = await updateTaskService(
      user_id,
      task_id,
      task_title,
      task_description,
      status,
      priority,
      due_date,
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    return res.status(200).json({
      message: "Task Updated Successfully",
      updatedTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ---------------------------- DELETE TASK CONTROLLER ---------------------------------
export const deleteTaskController = async (req: Request, res: Response) => {
    try { 
        const {task_id} = req.params;
        if(typeof task_id !== "string"){
            return res.status(400).json({
                message: "Task id is required"
            });
        }
        const {user_id} = req.body;
        if(!user_id){
            return res.status(400).json({
                message: "User id is required"
            });
        }
        const deletedTask = await deleteTaskService(task_id,user_id);
        if(!deletedTask){
          return res.status(404).json({
            message: "Task Not Found"
          });
        }

        return res.status(200).json({
           message: "Task Deleted Successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        message: "Internal Server Error",
        });
    }
}

// ---------------------------- FETCH TASK CONTROLLER -------------------------------
export const fetchAllTaskController = async(req: Request, res: Response) => {
  try {
    const {user_id} = req.params;
    if(typeof user_id !== "string"){
        return res.status(400).json({
            message: "User id is required"
        });
    }
    const allTaskData = await fetchAllTaskService(user_id);

    if(allTaskData.length === 0){
      return res.status(200).json({
        message: "No Tasks found"
      });
    }

    return res.status(200).json({
      message: "Tasks Fetched Successfully",
      allTaskData
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}
