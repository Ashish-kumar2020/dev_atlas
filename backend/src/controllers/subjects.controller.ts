import type { Request, Response } from "express";
import { deleteSubjectService, fetchAllSubjectsService, subjectCreationService, updateSubjectService } from "../services/subjects.services.js";

// --------------------- SUBJECT CONTROLLER -----------------------------
export const createSubjectController = async (req: Request, res: Response) => {
  try {
    const { user_id, subject_name, description } = req.body;
    if (!user_id || !subject_name) {
      return res.status(400).json({
        message: "All Fileds are required",
      });
    }

    const subjectCreation = await subjectCreationService(
      user_id,
      subject_name,
      description,
    );

    if (!subjectCreation) {
      return res.status(400).json({
        message: "Error while creating the subject",
      });
    }

    return res.status(201).json({
      message: "Subject Created Successfully",
      subjectCreation,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// --------------------- UPDATE SUBJECTS --------------------------------
export const updateSubjectController = async (req: Request, res: Response) => {
  try {
    const { subject_id } = req.params;
    if (typeof subject_id !== "string") {
      return res.status(400).json({
        message: "subject_id is required",
      });
    }
    const { subject_name, description } = req.body;
    const updatedSubjects = await updateSubjectService(subject_id, subject_name, description);

    if(!updatedSubjects){
        return res.status(404).json({
            message : "Subject Not Found"
        });
    }

    return res.status(200).json({
        message: "Subject Updated Successfully",
        updatedSubjects
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Internal Server Error"
    })
  }
};

// --------------------- DELETE SUBJECTS --------------------------------
export const deleteSubjectController = async (req: Request, res: Response) => {
    const {subject_id} = req.params;
    try {
        if(typeof subject_id !== "string"){
            return res.status(400).json({
                message: "Subject Id is required"
            });
        }
        const deletedSubjects = await deleteSubjectService(subject_id);
        if(!deletedSubjects){
            return res.status(404).json({
                message: "Subject Not Found",
            });
        }

        return res.status(200).json({
            message: "Subject Deleted Successfully",
            deletedSubjects
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// ---------------------- GET ALL SUBJECTS ------------------------------
export const getAllSubjectsController = async (req: Request, res: Response) => {
    try {
        const subjectsData = await fetchAllSubjectsService();
        if(subjectsData.length === 0){
            return res.status(404).json({
                message: "No Subject Found"
            });
        }
        return res.status(200).json({
            message: "Subject Fetched Successfully",
            subjectsData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}