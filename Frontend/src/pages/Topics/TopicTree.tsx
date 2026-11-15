import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  Plus,
} from "lucide-react";

import type { TOPIC } from "./topic.types";

import { Dialog, DialogTrigger } from "../../../@/components/ui/dialog";
import AddTopic from "./AddTopic";
import NotesInput from "../Notes/NotesInput";

type TopicTreeProps = {
  topics: TOPIC[];
  subjectId: string;
  parentTopicId?: string | null;
};

const TopicTree = ({
  topics,
  subjectId,
  parentTopicId = null,
}: TopicTreeProps) => {
  const [collapsedTopics, setCollapsedTopics] = useState<string[]>([]);

  const currentTopics = topics.filter(
    (topic) => topic.parent_topic_id === parentTopicId,
  );

  const toggleTopic = (id: string) => {
    setCollapsedTopics((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  if (currentTopics.length === 0) return null;

  return (
    <div className="space-y-1">
      {currentTopics.map((topic) => {
        const isExpanded = !collapsedTopics.includes(topic.id);

        const hasChildren = topics.some(
          (item) => item.parent_topic_id === topic.id,
        );

        return (
          <div key={topic.id}>
            <div className="group flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#111c2b]">
              <button
                type="button"
                onClick={() => toggleTopic(topic.id)}
                className="flex min-w-0 flex-1 items-center gap-2 text-left"
              >
                {hasChildren ? (
                  isExpanded ? (
                    <ChevronDown className="size-3.5 shrink-0 text-slate-500" />
                  ) : (
                    <ChevronRight className="size-3.5 shrink-0 text-slate-500" />
                  )
                ) : (
                  <span className="w-3.5 shrink-0" />
                )}

                <Folder className="size-4 shrink-0 text-blue-400" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-slate-300">
                    {topic.topic_name}
                  </p>

                  {topic.description && (
                    <p className="mt-0.5 truncate text-xs text-slate-500">
                      {topic.description}
                    </p>
                  )}
                </div>
              </button>

              <div className="flex items-center gap-1">
                <Dialog>
                  <DialogTrigger
                    render={
                      <button
                        type="button"
                        title="View notes"
                        className="rounded-md p-1.5 text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                      >
                        <FileText className="size-3.5" />
                      </button>
                    }
                  />

                  <NotesInput/>
                </Dialog>


               

                <Dialog>
                  <DialogTrigger
                    render={
                      <button
                        type="button"
                        title="Add subtopic"
                        className="rounded-md p-1.5 text-slate-500 hover:bg-blue-500/10 hover:text-blue-400"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    }
                  />

                  <AddTopic subjectId={subjectId} parentTopicId={topic.id} />
                </Dialog>
              </div>
            </div>

            {isExpanded && hasChildren && (
              <div className="ml-5 border-l border-[#252d39] pl-3">
                <TopicTree
                  topics={topics}
                  subjectId={subjectId}
                  parentTopicId={topic.id}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TopicTree;
