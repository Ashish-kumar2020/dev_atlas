import express from "express";
import { createSubjectController, deleteSubjectController, getAllSubjectsController, updateSubjectController } from "../controllers/subjects.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const subjectRouter = express.Router();

subjectRouter.post("/", authMiddleware,createSubjectController);
subjectRouter.patch("/subjects/:subject_id",  authMiddleware,updateSubjectController);
subjectRouter.delete("/subjects/:subject_id",  authMiddleware,deleteSubjectController);
subjectRouter.get("/", authMiddleware,getAllSubjectsController)


export default subjectRouter;