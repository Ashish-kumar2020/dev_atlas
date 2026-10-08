import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Plus,
  Trash2,
} from "lucide-react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { Input } from "../../../@/components/ui/input";

type TaskStatus = "Todo" | "In Progress" | "Completed";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  priority: "High" | "Medium" | "Low";
  tag: string;
};

const columns: TaskStatus[] = ["Todo", "In Progress", "Completed"];

const priorityStyles = {
  High: "bg-red-400",
  Medium: "bg-amber-400",
  Low: "bg-slate-600",
};

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Complete JavaScript event loop notes",
    status: "Todo",
    priority: "High",
    tag: "JavaScript",
  },
  {
    id: "2",
    title: "Practice sliding window problems",
    status: "Todo",
    priority: "Medium",
    tag: "DSA",
  },
  {
    id: "3",
    title: "Revise React performance optimization",
    status: "In Progress",
    priority: "High",
    tag: "React",
  },
  {
    id: "4",
    title: "Design DevAtlas progress screen",
    status: "In Progress",
    priority: "Medium",
    tag: "DevAtlas",
  },
  {
    id: "5",
    title: "Complete REST API notes",
    status: "Completed",
    priority: "High",
    tag: "System Design",
  },
  {
    id: "6",
    title: "Build question bank UI",
    status: "Completed",
    priority: "Low",
    tag: "DevAtlas",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");

  const openTasks = tasks.filter(
    (task) => task.status !== "Completed",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const progress = tasks.length
    ? Math.round((completedTasks / tasks.length) * 100)
    : 0;

  const addTask = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      status: "Todo",
      priority: "Medium",
      tag: "General",
    };

    setTasks((current) => [...current, newTask]);
    setTitle("");
    setAdding(false);
  };

  const moveTask = (id: string, status: TaskStatus) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, status } : task,
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks((current) =>
      current.filter((task) => task.id !== id),
    );
  };

  const getPreviousStatus = (status: TaskStatus) => {
    const index = columns.indexOf(status);
    return index > 0 ? columns[index - 1] : null;
  };

  const getNextStatus = (status: TaskStatus) => {
    const index = columns.indexOf(status);
    return index < columns.length - 1
      ? columns[index + 1]
      : null;
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Tasks
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Keep track of your learning, practice, and project work.
          </p>
        </div>

        <Button
          onClick={() => setAdding((value) => !value)}
          className="
            h-8
            rounded-md
            bg-blue-500
            px-3
            text-xs
            font-medium
            text-white
            hover:bg-blue-600
          "
        >
          <Plus className="mr-1.5 size-3.5" />
          New task
        </Button>
      </div>

      {/* Add Task */}
      {adding && (
        <div className="flex max-w-xl items-center gap-2 border-b border-white/8 pb-5">
          <Input
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTask();
              }
            }}
            placeholder="What needs doing?"
            className="
              h-9
              border-0
              border-b
              border-white/10
              rounded-none
              bg-transparent
              px-0
              text-sm
              text-slate-300
              shadow-none
              placeholder:text-slate-600
              focus-visible:border-blue-500/60
              focus-visible:ring-0
            "
          />

          <Button
            onClick={addTask}
            variant="ghost"
            className="
              h-8
              shrink-0
              px-3
              text-xs
              text-slate-400
              hover:bg-white/5
              hover:text-slate-200
            "
          >
            Add
          </Button>
        </div>
      )}

      {/* Summary */}
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-white/6 py-4">
        <div>
          <span className="text-xs text-slate-500">
            Open
          </span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {openTasks}
          </span>
        </div>

        <div className="h-4 w-px bg-white/8" />

        <div>
          <span className="text-xs text-slate-500">
            Completed
          </span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {completedTasks}
          </span>
        </div>

        <div className="h-4 w-px bg-white/8" />

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">
            Progress
          </span>

          <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs font-medium tabular-nums text-slate-300">
            {progress}%
          </span>
        </div>
      </div>

      {/* Task Board */}
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-3">
        {columns.map((column) => {
          const columnTasks = tasks.filter(
            (task) => task.status === column,
          );

          return (
            <section key={column}>
              {/* Column heading */}
              <div className="mb-2 flex items-center gap-2">
                {column === "Completed" && (
                  <CheckCircle2
                    className="size-3.5 text-emerald-400/70"
                    strokeWidth={1.75}
                  />
                )}

                <h2 className="text-xs font-medium text-slate-400">
                  {column}
                </h2>

                <span className="text-[11px] tabular-nums text-slate-600">
                  {columnTasks.length}
                </span>
              </div>

              {/* Tasks */}
              <div>
                {columnTasks.map((task) => {
                  const previousStatus = getPreviousStatus(
                    task.status,
                  );

                  const nextStatus = getNextStatus(
                    task.status,
                  );

                  return (
                    <div
                      key={task.id}
                      className="
                        group
                        relative
                        border-b
                        border-white/6
                        py-4
                        pl-3
                        transition-colors
                        hover:bg-white/[0.015]
                      "
                    >
                      {/* Priority indicator */}
                      <span
                        className={`
                          absolute
                          left-0
                          top-[18px]
                          h-3
                          w-0.5
                          rounded-full
                          ${priorityStyles[task.priority]}
                        `}
                      />

                      {/* Title */}
                      <p
                        className={`
                          pr-2
                          text-[13px]
                          leading-relaxed
                          ${
                            task.status === "Completed"
                              ? "text-slate-600 line-through"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {task.title}
                      </p>

                      {/* Metadata */}
                      <div className="mt-2.5 flex items-center gap-2">
                        <span className="text-[10.5px] text-slate-600">
                          {task.priority}
                        </span>

                        <span className="text-slate-700">
                          ·
                        </span>

                        <Badge
                          variant="outline"
                          className="
                            h-5
                            rounded
                            border-0
                            bg-white/[0.04]
                            px-1.5
                            text-[10px]
                            font-normal
                            text-slate-500
                          "
                        >
                          {task.tag}
                        </Badge>

                        {/* Actions */}
                        <div
                          className="
                            ml-auto
                            flex
                            items-center
                            gap-0.5
                            opacity-0
                            transition-opacity
                            group-hover:opacity-100
                          "
                        >
                          {previousStatus && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                moveTask(
                                  task.id,
                                  previousStatus,
                                )
                              }
                              className="
                                size-6
                                text-slate-600
                                hover:bg-white/5
                                hover:text-slate-300
                              "
                            >
                              <ArrowLeft className="size-3" />
                            </Button>
                          )}

                          {nextStatus && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                moveTask(
                                  task.id,
                                  nextStatus,
                                )
                              }
                              className="
                                size-6
                                text-slate-600
                                hover:bg-white/5
                                hover:text-slate-300
                              "
                            >
                              <ArrowRight className="size-3" />
                            </Button>
                          )}

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              removeTask(task.id)
                            }
                            className="
                              size-6
                              text-slate-600
                              hover:bg-red-500/5
                              hover:text-red-400
                            "
                          >
                            <Trash2 className="size-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {columnTasks.length === 0 && (
                  <div className="py-8 text-center text-[11px] text-slate-700">
                    Nothing here
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;