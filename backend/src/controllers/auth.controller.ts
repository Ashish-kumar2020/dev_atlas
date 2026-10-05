import type { Request, Response } from "express";
import {
  forgotPasswordService,
  updatePasswordService,
  userLoginDataService,
  userSignUpDataService,
  verifyUserDetailsService,
} from "../services/auth.services.js";

// -------------- LOGIN CONTROLLER ---------------------------------
export const loginController = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;
    if(!email || !password){
      return res.status(400).json({
        message: "All Fields are required"
      });
    } 

    const userLoginData = await userLoginDataService(email,password);
    if(!userLoginData){
      return res.status(401).json({
        message: "Invalid email or password"
      })
    }
    return res.status(200).json({
      message: "User Loggedin Successfully"
    })
    
  } catch (error) {
   console.log(error);
   return res.status(500).json({
    message: "Internal Server Error"
   }) 
  }
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


// -------------- FORGOT-PASSWORD CONTROLLER --------------------

export const forgotPasswordController =async (req: Request, res: Response) => {
    try {
      const {email} = req.body;
      if(!email){
        return res.status(400).json({
          message: "All Fields are mandatory"
        });
      }

      const forgotPassword = await forgotPasswordService(email);
      if(!forgotPassword){
        return res.status(400).json({
          message: "Invalid Email Address"
        });
      }

      return res.status(200).json({
       message: "Email verified"
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
      })
    }
}

// -------------- UPDATE-PASSWORD -----------------------

export const updatePasswordController = async(req: Request, res: Response) => {
  try {
    const {email,password} = req.body;

    if(!email ||!password){
      return res.status(400).json({
        message: "All Fields are mandatory"
      })
    }

    const updatePassword = await updatePasswordService(email, password);

    if(updatePassword === 0){
      return res.status(400).json({
        message: "Error While updating the password"
      })
    }
    return res.status(200).json({
      message: "Password Updated Successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

// -------------- VERIFY-ACCOUNT CONTROLLER ----------------------
export const verifyAccountController = (req: Request, res: Response) => {
  const { otp } = req.body;
  const verifyUserDetails = verifyUserDetailsService(otp);
  return res.status(200).json({
    message: "User Verified Successfully",
    verifyUserDetails,
  });
};
