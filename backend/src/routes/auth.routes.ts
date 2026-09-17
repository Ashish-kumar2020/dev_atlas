import express from "express";
import {
  loginController,
  signupController,
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
// authRouter.post("/forgot-password", )

// DELETE-ACCOUNT Endpoint

// UPDATE-PASSWORD Endpoint

export default authRouter;
