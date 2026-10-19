import express from "express";
import {
  createProfileController,
  fetchProfileController,
  updateProfileController,
} from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const profileRouter = express.Router();

profileRouter.post("/create-profile", authMiddleware,createProfileController);
profileRouter.get("/:user_id", authMiddleware,fetchProfileController);
profileRouter.patch("/", authMiddleware,updateProfileController);

export default profileRouter;