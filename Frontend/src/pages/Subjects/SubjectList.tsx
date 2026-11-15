
import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  Folder,
  FolderPlus,
  Plus,
  Trash2,
} from "lucide-react";

import type { SubjectEntries } from "./subject.types";
import type { TOPIC } from "../Topics/topic.types";

import { Dialog, DialogTrigger } from "../../../@/components/ui/dialog";
import AddTopic from "../Topics/AddTopic";
import TopicTree from "../Topics/TopicTree";
import { useTopics } from "../Topics/topic.queries";

type SubjectListProps = {
  subjects: SubjectEntries[];
};

const SubjectList = ({ subjects }: SubjectListProps) => {
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);


  

  const { data, isPending, isError, error } = useTopics();



const allTopics: TOPIC[] = data?.allTopics ?? [];

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="space-y-3">
      {subjects.map((subject) => {
        const isExpanded = expandedSubjects.includes(subject.id);

        const subjectTopics = allTopics.filter(
          (topic) => topic.subject_id === subject.id,
        );

        return (
          <section
            key={subject.id}
            className="overflow-hidden rounded-xl border border-[#252d39] bg-[#0b111b]"
          >
            {/* Subject Header */}
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
                {/* Add Root Topic */}
                <Dialog>
                  <DialogTrigger
                    render={
                      <button
                        type="button"
                        title="Add topic"
                        className="cursor-pointer rounded-md p-2 text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                      >
                        <FolderPlus className="size-4" />
                      </button>
                    }
                  />

                  <AddTopic
                    subjectId={subject.id}
                    parentTopicId={null}
                  />
                </Dialog>

                <button
                  type="button"
                  title="Delete subject"
                  className="rounded-md p-2 text-slate-500 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>

            {/* Topics Section */}
            {isExpanded && (
              <div className="border-t border-[#252d39] bg-[#080d15] px-5 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300">
                      Learning Topics
                    </h4>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Organize your learning into topics and subtopics
                    </p>
                  </div>

                  <span className="rounded-md border border-[#252d39] px-2 py-1 text-[11px] text-slate-400">
                    {subjectTopics.length} Topics
                  </span>
                </div>

                {isPending ? (
                  <p className="py-3 text-xs text-slate-500">
                    Loading topics...
                  </p>
                ) : isError ? (
                  <p className="py-3 text-xs text-red-400">
                    {error instanceof Error
                      ? error.message
                      : "Unable to load topics"}
                  </p>
                ) : subjectTopics.length > 0 ? (
                  <TopicTree
                    topics={subjectTopics}
                    subjectId={subject.id}
                    parentTopicId={null}
                  />
                ) : (
                  <div className="rounded-lg border border-dashed border-[#252d39] px-4 py-6 text-center">
                    <Folder className="mx-auto size-6 text-slate-600" />

                    <p className="mt-2 text-xs text-slate-400">
                      No topics added yet
                    </p>

                    <p className="mt-1 text-[11px] text-slate-600">
                      Start organizing your learning by adding a topic.
                    </p>
                  </div>
                )}

                {/* Add Root Topic */}
                <Dialog>
                  <DialogTrigger
                    render={
                      <button
                        type="button"
                        className="mt-4 flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400"
                      >
                        <Plus className="size-3.5" />
                        Add topic
                      </button>
                    }
                  />

                  <AddTopic
                    subjectId={subject.id}
                    parentTopicId={null}
                  />
                </Dialog>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default SubjectList;
