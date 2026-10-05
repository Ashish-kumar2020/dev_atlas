import express from "express";
import {
  forgotPasswordController,
  loginController,
  signupController,
  updatePasswordController,
  verifyAccountController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

// LOGIN Endpoint
authRouter.post("/login", loginController);

// SIGN-UP Endpoint
authRouter.post("/signup", signupController);

// VERIFY-ACCOUNT Endpoint
authRouter.post("/verify-account", verifyAccountController);

// FORGOT-PASSWORD Endpoint
authRouter.post("/forgot-password", forgotPasswordController)

// UPDATE-PASSWORD Endpoint
authRouter.post("/update-password", updatePasswordController)

// DELETE-ACCOUNT Endpoint
export default authRouter;
