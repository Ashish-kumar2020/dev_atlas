import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export type Language =
  | "javascript"
  | "typescript"
  | "python"
;

export const languageOptions: {
  label: string;
  value: Language;
}[] = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
];

export const getLanguageExtension = (language: Language) => {
  switch (language) {
    case "javascript":
      return javascript();

    case "typescript":
      return javascript({ typescript: true });

    case "python":
      return python();


    default:
      return javascript();
  }
};