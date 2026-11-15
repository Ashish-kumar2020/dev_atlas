import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  FolderPlus,
  Plus,
  Trash2,
} from "lucide-react";

import type { SubjectEntries } from "./subject.types";

type SubjectListProps = {
  subjects: SubjectEntries[];
};

const SubjectList = ({ subjects }: SubjectListProps) => {
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-3">
      {subjects.map((subject) => {
        const isExpanded = expandedSubjects.includes(subject.id);

        return (
          <section
            key={subject.id}
            className="overflow-hidden rounded-xl border border-[#252d39] bg-[#0b111b]"
          >
            <div className="group flex items-center gap-3 px-4 py-4 sm:px-5">
              <button
                type="button"
                onClick={() => toggleSubject(subject.id)}
                className="flex min-w-0 flex-1 items-center gap-3 text-left"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10">
                  <BookOpen className="size-5 text-blue-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-100">
                    {subject.subject_name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-slate-500">
                    {subject.description || "No description added"}
                  </p>
                </div>

                <ChevronDown
                  className={`size-4 text-slate-500 transition-transform ${
                    isExpanded ? "" : "-rotate-90"
                  }`}
                />
              </button>

              <div className="flex items-center gap-1">
                <button
                  title="Add topic"
                  className="rounded-md p-2 text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FolderPlus className="size-4" />
                </button>

                <button
                  title="Delete subject"
                  className="rounded-md p-2 text-slate-500 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>

            {isExpanded && (
              <div className="border-t border-[#252d39] bg-[#080d15] px-5 py-4">
                <p className="text-xs text-slate-500">
                  Topics will appear here.
                </p>

                <button className="mt-3 flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400">
                  <Plus className="size-3.5" />
                  Add topic
                </button>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default SubjectList;