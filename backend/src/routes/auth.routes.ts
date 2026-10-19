import express from "express";
import {
  forgotPasswordController,
  loginController,
  signupController,
  updatePasswordController,
  verifyAccountController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

// LOGIN Endpoint
authRouter.post("/login", loginController);

// SIGN-UP Endpoint
authRouter.post("/signup", signupController);

// VERIFY-ACCOUNT Endpoint
authRouter.post("/verify-account", verifyAccountController);

// FORGOT-PASSWORD Endpoint
authRouter.post("/forgot-password", forgotPasswordController);

// UPDATE-PASSWORD Endpoint
authRouter.post("/update-password", updatePasswordController);

authRouter.get("/protected", authMiddleware, (req, res) => {
  const userId = req.userId;
  return res.status(200).json({
    message: "You have accessed a protected route",
    userId
  });
});
// DELETE-ACCOUNT Endpoint
export default authRouter;
