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

export const signupController =  async (req: Request, res: Response) => {
    try {
      const {userName, email, password} = req.body;

      if(!userName || !email || !password){
        return res.status(400).json({
          message: "All Fields are required"
        });
      }

      const userSignUpData = await userSignUpDataService(userName,email,password);
      return res.status(201).json({
        message: "User Created Successfully",
        userSignUpData
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
      })
    }
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
