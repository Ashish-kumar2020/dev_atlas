import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

import EditorToolbar from "./EditorToolbar";
import "./notes-editor.css";

type NotesEditorProps = {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
};

const NotesEditor = ({
  content = "",
  onChange,
  placeholder = "Start writing your notes...",
}: NotesEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-blue-400 underline underline-offset-4",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class:
          "notes-editor-content prose prose-invert max-w-none min-h-[320px] px-5 py-4 text-sm leading-7 text-slate-200 outline-none",
        spellcheck: "true",
      },
    },

    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0B1018]">
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} />

      <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
        <span className="text-xs text-slate-500">
          Rich text editor
        </span>

        <span className="text-xs text-slate-500">
          {editor?.getText().length ?? 0} characters
        </span>
      </div>
    </div>
  );
};

export default NotesEditor;