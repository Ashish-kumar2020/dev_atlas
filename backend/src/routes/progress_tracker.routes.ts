import express from "express";
import { getProgressController, updateProgressController } from "../controllers/progress_tracker.controller.js";


const progressTrackerRouter = express.Router();

progressTrackerRouter.patch("/",updateProgressController)
progressTrackerRouter.get("/:user_id", getProgressController)

export default progressTrackerRouter;