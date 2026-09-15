import express from "express";
import {
  createNote,
  fetchQueriedNotes,
  fetchUniqueNotes,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/:id", fetchUniqueNotes);
router.get("/", fetchQueriedNotes);
router.post("/", createNote);

export default router;
