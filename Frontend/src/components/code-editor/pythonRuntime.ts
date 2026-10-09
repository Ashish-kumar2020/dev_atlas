import { loadPyodide } from "pyodide";

let pyodidePromise: ReturnType<typeof loadPyodide> | null = null;

const getPyodide = () => {
  if (!pyodidePromise) {
    pyodidePromise = loadPyodide().catch((error) => {
      pyodidePromise = null;
      throw error;
    });
  }

  return pyodidePromise;
};

export const executePython = async (
  code: string
): Promise<{ output: string[]; error: string | null }> => {
  const output: string[] = [];

  try {
    const pyodide = await getPyodide();

    pyodide.setStdout({
      batched: (text: string) => output.push(text),
    });

    pyodide.setStderr({
      batched: (text: string) => output.push(text),
    });

    await pyodide.runPythonAsync(code);

    return { output, error: null };
  } catch (error) {
    return {
      output,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};