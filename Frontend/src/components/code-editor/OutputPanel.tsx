import { Terminal } from "lucide-react";

type OutputPanelProps = {
  output: string[];
  error?: string | null;
};

const OutputPanel = ({
  output,
  error,
}: OutputPanelProps) => {
  return (
    <section className="overflow-hidden rounded-lg border border-white/8 bg-[#0B1018]">
      <div className="flex h-10 items-center gap-2 border-b border-white/6 px-4">
        <Terminal className="size-3.5 text-slate-500" />

        <h2 className="text-xs font-medium text-slate-300">
          Console
        </h2>
      </div>

      <div className="min-h-32 space-y-2 p-4 font-mono text-[12px]">
        {error && (
          <pre className="whitespace-pre-wrap wrap-break-word text-red-400">
            {error}
          </pre>
        )}

        {output.map((line, index) => (
          <pre
            key={index}
            className="whitespace-pre-wrap wrap-break-word text-slate-300"
          >
            {line}
          </pre>
        ))}

        {!error && output.length === 0 && (
          <p className="font-sans text-xs text-slate-600">
            Run your code to see the output here.
          </p>
        )}
      </div>
    </section>
  );
};

export default OutputPanel;