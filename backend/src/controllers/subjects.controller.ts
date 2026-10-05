

import type { Request, Response } from "express";
import { subjectCreationService } from "../services/subjects.services.js";


// ---------------- SUBJECT CONTROLLER --------------------
export const createSubjectController = async (req: Request, res: Response) => {
    try {
        const {user_id, subject_name, description} = req.body;
        if(!user_id || !subject_name){
            return res.status(400).json({
                message: "All Fileds are required"
            });
        }

        const subjectCreation = await subjectCreationService(user_id, subject_name, description);

        if(!subjectCreation){
            return res.status(400).json({
                message: "Error while creating the subject"
            })
        };

        return res.status(201).json({
            message: "Subject Created Successfully",
            subjectCreation
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}