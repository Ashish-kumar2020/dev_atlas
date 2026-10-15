import express from "express";
import { sendOTPController } from "../controllers/otp.controller.js";


const otpRouter = express.Router();


otpRouter.post("/",sendOTPController);

export default otpRouter; 