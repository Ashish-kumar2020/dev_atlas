import express from "express";
import {
  createNoteController,
  deleteNoteController,
  fetchAllNotesController,
  updateNoteController,
} from "../controllers/notes.controller.js";

const router = express.Router();


router.post("/notes", createNoteController);
router.patch("/:note_id",updateNoteController);
router.delete("/:note_id", deleteNoteController)
router.get("/notes",fetchAllNotesController)


export default router;
