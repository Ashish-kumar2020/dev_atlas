import type { Request, Response } from "express";
import { sendOTPService, verifyOTP } from "../services/otp.service.js";

export const sendOTPController = async (req: Request, res: Response) => {
  try {
    const { user_id, email } = req.body;
    if (!user_id || !email) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }
    const getOTPData = await sendOTPService(user_id, email);
    return res.status(200).json({
      message: "OTP Sent Successfully",
      getOTPData,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes("wait 60 seconds"))
      return res.status(429).json({
        message: error.message,
      });
    console.error("Send OTP error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const verifyOTPController = async (req: Request, res: Response) => {
  try {
    const { user_id, otp } = req.body;
    if (!user_id || !otp) {
      return res.status(400).json({
        message: "All fields are mandatory",
      });
    }
    await verifyOTP(user_id, otp);
    return res.status(200).json({
      message: "User verified successfully",
    });
  } catch (error) {
    if (error instanceof Error && "statusCode" in error) {
      const statusCode = (error as Error & { statusCode: number }).statusCode;
      return res.status(statusCode).json({
        message: error.message,
      });
    }
    console.error("Verify OTP error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
