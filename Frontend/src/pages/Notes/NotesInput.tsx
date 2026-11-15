
import { useState } from "react";
import { Save } from "lucide-react";

import NotesEditor from "@/components/notes-editor/NotesEditor";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../@/components/ui/dialog";

import { Button } from "../../../@/components/ui/button";

const NotesInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSaveNote = () => {
    const notePayload = {
      title,
      description,
    };

    console.log("NOTE PAYLOAD:", notePayload);

    // Connect your create note API here.
  };

  return (
    <DialogContent className="gap-0 overflow-hidden border border-zinc-800 bg-zinc-950 p-0 text-zinc-100 sm:max-w-3xl">
      <DialogHeader className="border-b border-zinc-800 px-6 py-5">
        <DialogTitle className="text-xl font-semibold text-white">
          Create Note
        </DialogTitle>

        <DialogDescription className="text-sm text-zinc-400">
          Capture concepts, code snippets, and important learnings.
        </DialogDescription>
      </DialogHeader>

      <div className="max-h-[75vh] space-y-5 overflow-y-auto px-6 py-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="w-full border-b border-white/10 bg-transparent py-3 text-2xl font-semibold text-slate-100 outline-none placeholder:text-slate-600 focus:border-blue-500"
        />
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-300">
            Description
          </p>

          <NotesEditor
            content={description}
            onChange={setDescription}
            placeholder="Write a short description..."
          />
        </div>

        <div className="flex justify-end">
          <Button
            disabled={!title.trim()}
            onClick={handleSaveNote}
            className="bg-blue-600 text-white hover:bg-blue-500"
          >
            <Save className="mr-2 size-4" />
            Save Note
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default NotesInput;
