import express from "express";
import { createSubjectController } from "../controllers/subjects.controller.js";

const subjectRouter = express.Router();

subjectRouter.post("/subjects",createSubjectController)

export default subjectRouter;