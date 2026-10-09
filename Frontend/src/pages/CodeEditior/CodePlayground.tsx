import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "../../../@/components/ui/button";

import CodeEditor from "@/components/code-editor/CodeEditor";
import OutputPanel from "@/components/code-editor/OutputPanel";
import { executeCode } from "@/components/code-editor/executeCode";
import {
  languageOptions,
  type Language,
} from "@/components/code-editor/languages";
import { executePython } from "../../components/code-editor/pythonRuntime";
import { executeTypeScript } from "@/components/code-editor/typescriptRuntime";

const initialCode = `const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet("DevAtlas"));
console.log(2 + 3);
`;

const CodePlayground = () => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState<Language>("javascript");

  const runCode = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setOutput([]);
    setError(null);

    try {
      let result: {
        output: string[];
        error: string | null;
      };

      switch (language) {
        case "javascript":
          result = await executeCode(code);
          break;

        case "typescript":
          result = await executeTypeScript(code);
          break;

        case "python":
          result = await executePython(code);
          break;

        default:
          result = {
            output: [],
            error: "Unsupported language.",
          };
      }

      setOutput(result.output);
      setError(result.error);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Execution failed.");
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    switch (language) {
      case "javascript":
        setCode(`const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet("DevAtlas"));
console.log(2 + 3);`);
        break;

      case "typescript":
        setCode(`interface User {
  name: string;
  age: number;
}

const greet = (user: User): string => {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
};

const user: User = {
  name: "DevAtlas",
  age: 25,
};

console.log(greet(user));
console.log("10 + 20 =", 10 + 20);`);
        break;

      case "python":
        setCode(`def greet(name):
    return f"Hello, {name}!"

name = "DevAtlas"
print(greet(name))
print("10 + 20 =", 10 + 20)`);
        break;

      default:
        setCode("");
    }

    setOutput([]);
    setError(null);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);

    switch (lang) {
      case "javascript":
        setCode(`const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet("DevAtlas"));
console.log(2 + 3);`);
        break;

      case "typescript":
        setCode(`interface User {
  name: string;
  age: number;
}

const greet = (user: User): string => {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
};

const user: User = {
  name: "DevAtlas",
  age: 25,
};

console.log(greet(user));
console.log("10 + 20 =", 10 + 20);`);
        break;

      case "python":
        setCode(`def greet(name):
    return f"Hello, {name}!"

name = "DevAtlas"
print(greet(name))
print("10 + 20 =", 10 + 20)`);
        break;

      default:
        setCode("");
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">
            Code Playground
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Write, execute, and experiment with code.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={resetCode}
            disabled={isRunning}
            className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-slate-300 cursor-pointer"
          >
            <RotateCcw size={15} className="mr-2" />
            Reset
          </Button>

          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer"
          >
            <Play size={15} className="mr-2" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            className="rounded-md border border-white/10 bg-[#0B1018] px-3 py-1.5 text-sm text-slate-300 outline-none focus:border-blue-500 cursor-pointer"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0B1018] px-4 py-3">
          <span className="text-sm text-slate-300">main.js</span>

          <span className="text-xs text-slate-500">JavaScript</span>
        </div>

        <CodeEditor
          value={code}
          onChange={setCode}
          height="420px"
          language={language}
        />
      </div>

      <OutputPanel output={output} error={error} />
    </div>
  );
};

export default CodePlayground;
