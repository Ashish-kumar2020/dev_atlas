import type { Request, Response } from "express";
import {
  createProfileService,
  fetchProfileService,
  updateProfileService,
} from "../services/profile.service.js";

// Create Profile
export const createProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      user_id,
      skills,
      current_company,
      experience_years,
      experience_months,
      linkedin_url,
      github_url,
    } = req.body;

    if (!user_id) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const profile = await createProfileService(user_id, {
      skills,
      current_company,
      experience_years,
      experience_months,
      linkedin_url,
      github_url,
    });

    return res.status(201).json({
      message: "Profile created successfully",
      profile,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Fetch Profile
export const fetchProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    const { user_id } = req.params;

    if (typeof user_id !== "string") {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const profile = await fetchProfileService(user_id);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      message: "Profile fetched successfully",
      profile,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Update Profile
export const updateProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    // const { user_id } = req.params;

    // if (typeof user_id !== "string") {
    //   return res.status(400).json({
    //     message: "User ID is required",
    //   });
    // }

    const {
      skills,
      current_company,
      experience_years,
      experience_months,
      linkedin_url,
      github_url,
      user_id
    } = req.body;

    const updatedProfile = await updateProfileService(user_id, {
      skills,
      current_company,
      experience_years,
      experience_months,
      linkedin_url,
      github_url,
    });

    if (!updatedProfile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      updatedProfile,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};