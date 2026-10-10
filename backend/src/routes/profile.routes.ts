import express from "express";
import {
  createProfileController,
  fetchProfileController,
  updateProfileController,
} from "../controllers/profile.controller.js";

const profileRouter = express.Router();

profileRouter.post("/", createProfileController);
profileRouter.get("/:user_id", fetchProfileController);
profileRouter.patch("/:user_id", updateProfileController);

export default profileRouter;