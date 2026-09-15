import type { Request, Response } from "express";
import {
  userLoginDataService,
  userSignUpDataService,
  verifyUserDetailsService,
} from "../services/auth.services.js";

// -------------- LOGIN CONTROLLER ---------------------------------
export const loginController = (req: Request, res: Response) => {
  const { userName, password } = req.body;
  const userLoginData = userLoginDataService(userName, password);
  return res.status(200).json({
    message: "User LogedIn Successfully",
    userLoginData,
  });
};

// -------------- SIGNUP CONTROLLER ---------------------------------

export const signupController = (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  const userSignUpData = userSignUpDataService(userName, email, password);
  return res.status(201).json({
    message: "User Profile Created Successfully",
    userSignUpData,
  });
};

// -------------- VERIFY-ACCOUNT CONTROLLER ----------------------
export const verifyAccountController = (req: Request, res: Response) => {
  const { otp } = req.body;
  const verifyUserDetails = verifyUserDetailsService(otp);
  return res.status(200).json({
    message: "User Verified Successfully",
    verifyUserDetails,
  });
};
