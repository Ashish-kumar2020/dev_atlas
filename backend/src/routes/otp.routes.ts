import express from "express";
import { sendOTPController, verifyOTPController } from "../controllers/otp.controller.js";


const otpRouter = express.Router();


otpRouter.post("/send-otp",sendOTPController);
otpRouter.post("/verify-otp", verifyOTPController)

export default otpRouter; 