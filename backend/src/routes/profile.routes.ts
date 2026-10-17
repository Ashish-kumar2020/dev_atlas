import express from "express";
import {
  createProfileController,
  fetchProfileController,
  updateProfileController,
} from "../controllers/profile.controller.js";

const profileRouter = express.Router();

profileRouter.post("/create-profile", createProfileController);
profileRouter.get("/:user_id", fetchProfileController);
profileRouter.patch("/", updateProfileController);

export default profileRouter;