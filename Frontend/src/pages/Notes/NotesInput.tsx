import { useState } from "react";
import NotesEditor from "@/components/notes-editor/NotesEditor";

const NotesInput = () => {
  const [content, setContent] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Create Note
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Capture concepts, code snippets, and important learnings.
        </p>
      </div>

      <input
        type="text"
        placeholder="Untitled note"
        className="w-full border-b border-white/10 bg-transparent py-3 text-2xl font-semibold text-slate-100 outline-none placeholder:text-slate-600 focus:border-blue-500"
      />

      <NotesEditor
        content={content}
        onChange={setContent}
        placeholder="Start writing your notes..."
      />
    </div>
  );
};

export default NotesInput;