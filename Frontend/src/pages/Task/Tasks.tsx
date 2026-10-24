import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Trash2,
} from "lucide-react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { AddTask } from "./AddTask";
import { useDeleteTask, useTask } from "./task.queries";
import { toast } from "sonner";
import { handleApiError } from "@/api/handleApiError";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";

type ApiTask = {
  id: string;
  user_id: string;
  task_title: string;
  task_description: string;
  status: "backlog" | "inProgress" | "done";
  priority: "low" | "medium" | "high";
  due_date: string;
};

type TaskStatus = "Todo" | "In Progress" | "Completed";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  priority: "High" | "Medium" | "Low";
  tag: string;
};

const columns: TaskStatus[] = ["Todo", "In Progress", "Completed"];

const priorityStyles: Record<Task["priority"], string> = {
  High: "bg-red-400",
  Medium: "bg-amber-400",
  Low: "bg-slate-600",
};

const statusMap: Record<ApiTask["status"], TaskStatus> = {
  backlog: "Todo",
  inProgress: "In Progress",
  done: "Completed",
};

const Tasks = () => {
  const { data, isPending, isError, error } = useTask();

  const allTasks: ApiTask[] = data?.allTaskData ?? [];
  const deleteTask = useDeleteTask();

  const tasks: Task[] = allTasks.map((task) => ({
    id: task.id,
    title: task.task_title,
    status: statusMap[task.status],
    priority:
      (task.priority.charAt(0).toUpperCase() +
        task.priority.slice(1)) as Task["priority"],
    tag: "Task",
  }));

  const openTasks = allTasks.filter(
    (task) => task.status !== "done",
  ).length;

  const completedTasks = allTasks.filter(
    (task) => task.status === "done",
  ).length;

  const progress = allTasks.length
    ? Math.round((completedTasks / allTasks.length) * 100)
    : 0;

  const getPreviousStatus = (status: TaskStatus) => {
    const index = columns.indexOf(status);
    return index > 0 ? columns[index - 1] : null;
  };

  const getNextStatus = (status: TaskStatus) => {
    const index = columns.indexOf(status);
    return index < columns.length - 1 ? columns[index + 1] : null;
  };

  if (isPending) {
    return <p className="text-sm text-slate-400">Loading tasks...</p>;
  }

  if (isError) {
    return (
      <p className="text-sm text-red-400">
        {error instanceof Error ? error.message : "Failed to load tasks."}
      </p>
    );
  }



  const handleTaskDelete = (id: string) => {
    console.log(id)
    deleteTask.mutate(id, {
      onSuccess: () => {
        toast.success(GENERIC_MESSAGE.TASK_DELETED_SUCCESS)
      },
      onError: (error: unknown) => {
        toast.error(handleApiError(error, GENERIC_MESSAGE.TASK_DELETED_FAILED))
      }
    })
  }

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

        <AddTask />
      </div>

      {/* Summary */}
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-white/6 py-4">
        <div>
          <span className="text-xs text-slate-500">Open</span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {openTasks}
          </span>
        </div>

        <div className="h-4 w-px bg-white/8" />

        <div>
          <span className="text-xs text-slate-500">Completed</span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {completedTasks}
          </span>
        </div>

        <div className="h-4 w-px bg-white/8" />

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">Progress</span>

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
                  const previousStatus = getPreviousStatus(task.status);
                  const nextStatus = getNextStatus(task.status);

                  return (
                    <div
                      key={task.id}
                      className="group relative border-b border-white/6 py-4 pl-3 transition-colors hover:bg-white/1.5"
                    >
                      {/* Priority indicator */}
                      <span
                        className={`absolute left-0 top-4.5 h-3 w-0.5 rounded-full ${priorityStyles[task.priority]}`}
                      />

                      {/* Title */}
                      <p
                        className={`pr-2 text-[13px] leading-relaxed ${
                          task.status === "Completed"
                            ? "text-slate-600 line-through"
                            : "text-slate-300"
                        }`}
                      >
                        {task.title}
                      </p>

                      {/* Metadata */}
                      <div className="mt-2.5 flex items-center gap-2">
                        <span className="text-[10.5px] text-slate-600">
                          {task.priority}
                        </span>

                        <span className="text-slate-700">·</span>

                        <Badge
                          variant="outline"
                          className="h-5 rounded border-0 bg-white/4 px-1.5 text-[10px] font-normal text-slate-500"
                        >
                          {task.tag}
                        </Badge>

                        {/* Actions */}
                        <div className="ml-auto flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                          {previousStatus && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-6 text-slate-600 hover:bg-white/5 hover:text-slate-300"
                              aria-label="Move task backward"
                              onClick={() => {
                                console.log(
                                  "Move task backward:",
                                  task.id,
                                  previousStatus,
                                );
                              }}
                            >
                              <ArrowLeft className="size-3" />
                            </Button>
                          )}

                          {nextStatus && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-6 text-slate-600 hover:bg-white/5 hover:text-slate-300"
                              aria-label="Move task forward"
                              onClick={() => {
                                console.log(
                                  "Move task forward:",
                                  task.id,
                                  nextStatus,
                                );
                              }}
                            >
                              <ArrowRight className="size-3" />
                            </Button>
                          )}

                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="size-6 text-slate-600 hover:bg-red-500/5 hover:text-red-400"
                            aria-label="Delete task"
                            onClick={() => handleTaskDelete(task.id)}
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