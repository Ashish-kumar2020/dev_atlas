import express from "express";
import { getProgressController, updateProgressController } from "../controllers/progress_tracker.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const progressTrackerRouter = express.Router();

progressTrackerRouter.patch("/",  authMiddleware,updateProgressController)
progressTrackerRouter.get("/:user_id",  authMiddleware, getProgressController)

export default progressTrackerRouter;