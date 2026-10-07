import type { Request, Response } from "express";
import {
  createNotesService,
  deleteNoteService,
  fetchAllNotesService,
  fetchQueriedNotesService,
  fetchUniqueNotesService,
  updateNotesService,
} from "../services/notes.service.js";

// --------------------- CREATE NOTE CONTROLLER ---------------------------
export const createNoteController = async (req: Request, res: Response) => {
  try {
    const { title, description, topic_id } = req.body;
    if (!title || !description || !topic_id) {
      return res.status(400).json({
        message: "All Fields are mandatory",
      });
    }

    const notesData = await createNotesService(title, description, topic_id);
    if (!notesData) {
      return res.status(400).json({
        message: "Error while creating the notes",
      });
    }

    return res.status(201).json({
      message: "Notes is successfully Created",
      notesData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ---------------------- UPDATE NOTES -----------------------------------
export const updateNoteController = async (req: Request, res: Response) => {
  try {
    const { note_id } = req.params;
    if (typeof note_id !== "string") {
      return res.status(400).json({
        message: "note_id is required",
      });
    }
    const { title, description } = req.body;
    const updatedNotes = await updateNotesService(note_id, title, description);
    if (!updatedNotes) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    return res.status(200).json({
      message: "Note updated successfully",
      updatedNotes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ---------------------- DELETE NOTE ------------------------------------
export const deleteNoteController = async(req: Request, res:Response) => {
  try {
    const {note_id}  = req.params;
    if(typeof note_id !== "string"){
      return res.status(400).json({
        message: "note_id is required"
      });
    }
    const deletedNote = await deleteNoteService(note_id);

    if(!deletedNote){
      return res.status(404).json({
        message: "Note not found"
      });
    }

    return res.status(200).json({
      message: "Note Deleted Successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

// ---------------------- FETCH ALL NOTES --------------------------------
export const fetchAllNotesController = async(req: Request, res: Response) => {
  try {
    
    const allNotesData = await fetchAllNotesService();

    if(allNotesData.length === 0){
      return res.status(404).json({
        message: "No Notes found"
      });
    }

    return res.status(200).json({
      message: "Notes Fetched Successfully",
      allNotesData
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

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
