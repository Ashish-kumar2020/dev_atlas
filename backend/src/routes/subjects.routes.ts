import express from "express";
import { createSubjectController, deleteSubjectController, getAllSubjectsController, updateSubjectController } from "../controllers/subjects.controller.js";

const subjectRouter = express.Router();

subjectRouter.post("/",createSubjectController);
subjectRouter.patch("/subjects/:subject_id", updateSubjectController);
subjectRouter.delete("/subjects/:subject_id", deleteSubjectController);
subjectRouter.get("/",getAllSubjectsController)


export default subjectRouter;