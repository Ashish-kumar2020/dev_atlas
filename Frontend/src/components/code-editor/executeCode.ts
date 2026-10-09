export type ExecutionResult = {
  output: string[];
  error: string | null;
};

export const executeCode = (
  code: string,
  timeout = 3000
): Promise<ExecutionResult> => {
  return new Promise((resolve) => {
    let worker: Worker | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let workerUrl: string | null = null;
    let settled = false;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      if (worker) {
        worker.terminate();
        worker = null;
      }

      if (workerUrl) {
        URL.revokeObjectURL(workerUrl);
        workerUrl = null;
      }
    };

    const finish = (result: ExecutionResult) => {
      if (settled) return;

      settled = true;
      cleanup();
      resolve(result);
    };

    try {
      const workerSource = `
        self.onmessage = ({ data: code }) => {
          const logs = [];

          const format = (value) => {
            if (typeof value === "string") return value;

            try {
              const result = JSON.stringify(value);
              return result === undefined ? String(value) : result;
            } catch {
              return String(value);
            }
          };

          const capture = (...args) => {
            logs.push(args.map(format).join(" "));
          };

          try {
            const execute = new Function(
              "console",
              '"use strict";\\n' + code
            );

            execute({
              log: capture,
              info: capture,
              warn: capture,
              error: capture,
              debug: capture
            });

            self.postMessage({
              type: "success",
              output: logs
            });
          } catch (error) {
            self.postMessage({
              type: "error",
              output: logs,
              error: error instanceof Error
                ? error.message
                : String(error)
            });
          }
        };
      `;

      const blob = new Blob([workerSource], {
        type: "text/javascript",
      });

      workerUrl = URL.createObjectURL(blob);
      worker = new Worker(workerUrl);

      worker.onmessage = (event: MessageEvent) => {
        const result = event.data;

        finish({
          output: result.output ?? [],
          error: result.type === "error" ? result.error : null,
        });
      };

      worker.onerror = () => {
        finish({
          output: [],
          error: "An unexpected execution error occurred.",
        });
      };

      timeoutId = setTimeout(() => {
        finish({
          output: [],
          error: `Execution timed out after ${timeout}ms.`,
        });
      }, timeout);

      worker.postMessage(code);
    } catch {
      finish({
        output: [],
        error: "Failed to initialize the code execution environment.",
      });
    }
  });
};