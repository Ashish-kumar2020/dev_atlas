import type { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo2,
  Redo2,
  Link as LinkIcon,
} from "lucide-react";

type EditorToolbarProps = {
  editor: Editor | null;
};

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  if (!editor) return null;

  const buttonClass = (active: boolean) =>
    `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors ${
      active
        ? "bg-blue-500/15 text-blue-400"
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`;

  const addLink = () => {
    const previousUrl = editor.getAttributes("link").href as
      | string
      | undefined;

    const url = window.prompt("Enter URL", previousUrl ?? "");

    if (url === null) return;

    if (!url.trim()) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url.trim() })
      .run();
  };

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-white/10 px-3 py-2">
      <button
        type="button"
        title="Bold"
        aria-label="Bold"
        aria-pressed={editor.isActive("bold")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
      >
        <Bold size={16} />
      </button>

      <button
        type="button"
        title="Italic"
        aria-label="Italic"
        aria-pressed={editor.isActive("italic")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
      >
        <Italic size={16} />
      </button>

      <button
        type="button"
        title="Underline"
        aria-label="Underline"
        aria-pressed={editor.isActive("underline")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={buttonClass(editor.isActive("underline"))}
      >
        <Underline size={16} />
      </button>

      <button
        type="button"
        title="Strikethrough"
        aria-label="Strikethrough"
        aria-pressed={editor.isActive("strike")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={buttonClass(editor.isActive("strike"))}
      >
        <Strikethrough size={16} />
      </button>

      <div className="mx-1 h-5 w-px bg-white/10" />

      <button
        type="button"
        title="Heading 1"
        aria-label="Heading 1"
        aria-pressed={editor.isActive("heading", { level: 1 })}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={buttonClass(editor.isActive("heading", { level: 1 }))}
      >
        <Heading1 size={17} />
      </button>

      <button
        type="button"
        title="Heading 2"
        aria-label="Heading 2"
        aria-pressed={editor.isActive("heading", { level: 2 })}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
      >
        <Heading2 size={17} />
      </button>

      <div className="mx-1 h-5 w-px bg-white/10" />

      <button
        type="button"
        title="Bullet list"
        aria-label="Bullet list"
        aria-pressed={editor.isActive("bulletList")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
      >
        <List size={17} />
      </button>

      <button
        type="button"
        title="Numbered list"
        aria-label="Numbered list"
        aria-pressed={editor.isActive("orderedList")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive("orderedList"))}
      >
        <ListOrdered size={17} />
      </button>

      <button
        type="button"
        title="Blockquote"
        aria-label="Blockquote"
        aria-pressed={editor.isActive("blockquote")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={buttonClass(editor.isActive("blockquote"))}
      >
        <Quote size={16} />
      </button>

      <button
        type="button"
        title="Code block"
        aria-label="Code block"
        aria-pressed={editor.isActive("codeBlock")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={buttonClass(editor.isActive("codeBlock"))}
      >
        <Code size={16} />
      </button>

      <button
        type="button"
        title="Insert link"
        aria-label="Insert link"
        aria-pressed={editor.isActive("link")}
        onMouseDown={(event) => event.preventDefault()}
        onClick={addLink}
        className={buttonClass(editor.isActive("link"))}
      >
        <LinkIcon size={16} />
      </button>

      <div className="mx-1 h-5 w-px bg-white/10" />

      <button
        type="button"
        title="Undo"
        aria-label="Undo"
        disabled={!editor.can().undo()}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().undo().run()}
        className={`${buttonClass(false)} disabled:cursor-not-allowed disabled:opacity-30`}
      >
        <Undo2 size={16} />
      </button>

      <button
        type="button"
        title="Redo"
        aria-label="Redo"
        disabled={!editor.can().redo()}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.chain().focus().redo().run()}
        className={`${buttonClass(false)} disabled:cursor-not-allowed disabled:opacity-30`}
      >
        <Redo2 size={16} />
      </button>
    </div>
  );
};

export default EditorToolbar;