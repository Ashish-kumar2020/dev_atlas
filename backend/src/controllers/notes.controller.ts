import type { Request, Response } from "express";
import {
  createNotesService,
  fetchQueriedNotesService,
  fetchUniqueNotesService,
} from "../services/notes.service.js";

export const createNote = (req: Request, res: Response) => {
  const userNotes = req.body;
  const createdNotes = createNotesService(userNotes);
  res.json({
    message: "Note added successfully",
    note: createdNotes,
  });
};

export const fetchUniqueNotes = (req: Request, res: Response) => {
  const noteId = req.params.id;
  if (typeof noteId !== "string") {
    return res.status(400).json({
      message: "Invalid note ID",
    });
  }
  const getUniqueNotes = fetchUniqueNotesService(noteId);
  res.json({
    message: "Note fetched successfully",
    noteId: getUniqueNotes,
  });
};

export const fetchQueriedNotes = (req: Request, res: Response) => {
  const tagReceived = req.query.tag;
  const limit = req.query.limit;
  if (typeof limit !== "string" || typeof tagReceived !== "string") {
    return res.status(400).json({
      message: "Invalid Note Id",
    });
  }
  const queryNotesService = fetchQueriedNotesService(tagReceived, limit);
  res.json({
    message: "Note fetched successfully",
    queryNotesService,
  });
};
