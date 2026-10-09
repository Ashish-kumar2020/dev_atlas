import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

import type { Language } from "@/components/code-editor/languages";
import { getLanguageExtension } from "@/components/code-editor/languages";

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  language: Language;
  height?: string;
};

const devAtlasTheme = EditorView.theme({
  "&": {
    backgroundColor: "#0B1018",
    color: "#FFFFFF",
    fontSize: "13px",
    height: "100%",
  },

  ".cm-content": {
    fontFamily: "'JetBrains Mono', monospace",
    caretColor: "#FFFFFF",
    padding: "16px 0",
  },

  ".cm-gutters": {
    backgroundColor: "#0B1018",
    color: "#64748B",
    border: "none",
    borderRight: "1px solid rgba(255,255,255,0.08)",
  },

  ".cm-activeLine": {
    backgroundColor: "rgba(255,255,255,0.04)",
  },

  ".cm-activeLineGutter": {
    backgroundColor: "transparent",
    color: "#FFFFFF",
  },

  ".cm-cursor": {
    borderLeftColor: "#FFFFFF",
  },

  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    backgroundColor: "#264F78 !important",
  },

  ".cm-line": {
    padding: "0 8px",
  },

  ".cm-scroller": {
    fontFamily: "'JetBrains Mono', monospace",
    lineHeight: "1.8",
    overflow: "auto",
  },

  // Autocomplete tooltip
  ".cm-tooltip": {
    backgroundColor: "#0B1018",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF",
  },

  ".cm-tooltip-autocomplete": {
    backgroundColor: "#0B1018",
  },

  ".cm-tooltip-autocomplete ul": {
    backgroundColor: "#0B1018",
    color: "#FFFFFF",
    fontFamily: "'JetBrains Mono', monospace",
  },

  ".cm-tooltip-autocomplete ul li": {
    backgroundColor: "#0B1018",
    color: "#FFFFFF",
    padding: "4px 8px",
  },

  ".cm-tooltip-autocomplete ul li[aria-selected]": {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
  },

  ".cm-completionLabel": {
    color: "#FFFFFF",
  },

  ".cm-completionDetail": {
    color: "#94A3B8",
  },

  ".cm-completionMatchedText": {
    color: "#FFFFFF",
    textDecoration: "none",
  },

  ".cm-completionInfo": {
    backgroundColor: "#0B1018",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  "&.cm-focused": {
    outline: "none",
  },
});

const devAtlasHighlighting = HighlightStyle.define([
  { tag: tags.keyword, color: "#FFFFFF" },
  { tag: tags.controlKeyword, color: "#FFFFFF" },
  { tag: tags.operatorKeyword, color: "#FFFFFF" },
  { tag: tags.variableName, color: "#FFFFFF" },
  { tag: tags.definition(tags.variableName), color: "#FFFFFF" },
  { tag: tags.function(tags.variableName), color: "#FFFFFF" },
  { tag: tags.typeName, color: "#FFFFFF" },
  { tag: tags.className, color: "#FFFFFF" },
  { tag: tags.propertyName, color: "#FFFFFF" },
  { tag: tags.string, color: "#FFFFFF" },
  { tag: tags.number, color: "#FFFFFF" },
  { tag: tags.bool, color: "#FFFFFF" },
  { tag: tags.null, color: "#FFFFFF" },
  { tag: tags.comment, color: "#FFFFFF" },
  { tag: tags.operator, color: "#FFFFFF" },
  { tag: tags.punctuation, color: "#FFFFFF" },
  { tag: tags.bracket, color: "#FFFFFF" },
]);

const CodeEditor = ({
  value,
  onChange,
  language,
  height = "420px",
}: CodeEditorProps) => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#0B1018]">
      <CodeMirror
        value={value}
        onChange={onChange}
        height={height}
        theme={devAtlasTheme}
        extensions={[
          getLanguageExtension(language),
          syntaxHighlighting(devAtlasHighlighting),
        ]}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          highlightActiveLineGutter: true,
          autocompletion: true,
          bracketMatching: true,
          closeBrackets: true,
          indentOnInput: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;