import ts from "typescript";
import { executeCode } from "./executeCode";

export const executeTypeScript = async (
  code: string
): Promise<{ output: string[]; error: string | null }> => {
  try {
    const result = ts.transpileModule(code, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
    strict: true,
  },
  reportDiagnostics: true,
});

    const errors = (result.diagnostics ?? []).filter(
      (diagnostic) =>
        diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (errors.length > 0) {
      return {
        output: [],
        error: errors
          .map((diagnostic) =>
            ts.flattenDiagnosticMessageText(
              diagnostic.messageText,
              "\n"
            )
          )
          .join("\n"),
      };
    }

    return await executeCode(result.outputText);
  } catch (error) {
    return {
      output: [],
      error:
        error instanceof Error
          ? error.message
          : "TypeScript compilation failed.",
    };
  }
};