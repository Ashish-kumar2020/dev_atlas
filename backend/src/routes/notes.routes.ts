import express from "express";
import {
  createNoteController,
  deleteNoteController,
  fetchAllNotesController,
  updateNoteController,
} from "../controllers/notes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/notes", authMiddleware, createNoteController);
router.patch("/:note_id",authMiddleware, updateNoteController);
router.delete("/:note_id", authMiddleware, deleteNoteController)
router.get("/notes",authMiddleware, fetchAllNotesController)


export default router;
