import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Trash2,
} from "lucide-react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { AddTask } from "./AddTask";
import { useDeleteTask, useTask, useUpdateTask } from "./task.queries";
import { toast } from "sonner";
import { handleApiError } from "@/api/handleApiError";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";
import type { ApiTask, Task, TaskStatus } from "./task.types";
import { EditTask } from "./EditTask";

const columns: TaskStatus[] = ["backlog", "inProgress", "done"];

const columnLabels: Record<TaskStatus, string> = {
  backlog: "Backlog",
  inProgress: "In Progress",
  done: "Done",
};

const priorityStyles: Record<Task["priority"], string> = {
  High: "bg-red-400",
  Medium: "bg-amber-400",
  Low: "bg-slate-600",
};

const statusMap: Record<ApiTask["status"], TaskStatus> = {
  backlog: "backlog",
  inProgress: "inProgress",
  done: "done",
};

const Tasks = () => {
  const { data, isPending, isError, error } = useTask();

  const deleteTask = useDeleteTask();
  const updateTask = useUpdateTask();

  const allTasks: ApiTask[] = data?.allTaskData ?? [];

  const tasks: Task[] = allTasks.map((task) => ({
    id: task.id,
    title: task.task_title,
    description: task.task_description,
    status: statusMap[task.status],
    priority: (
      task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
    ) as Task["priority"],
    tag: "Task",
    due_date: task.due_date
      ? new Date(task.due_date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })
      : "",
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

  const getPreviousStatus = (status: TaskStatus): TaskStatus | null => {
    const index = columns.indexOf(status);
    return index > 0 ? columns[index - 1] : null;
  };

  const getNextStatus = (status: TaskStatus): TaskStatus | null => {
    const index = columns.indexOf(status);
    return index < columns.length - 1 ? columns[index + 1] : null;
  };

  const moveTask = (task_id: string, status: TaskStatus) => {
    updateTask.mutate(
      { task_id, status },
      {
        onSuccess: () => {
          toast.success(GENERIC_MESSAGE.TASK_UPDATED_SUCCESS);
        },
        onError: (error: unknown) => {
          toast.error(
            handleApiError(error, GENERIC_MESSAGE.TASK_UPDATED_FAILED),
          );
        },
      },
    );
  };

  const handleTaskDelete = (id: string) => {
    deleteTask.mutate(id, {
      onSuccess: () => {
        toast.success(GENERIC_MESSAGE.TASK_DELETED_SUCCESS);
      },
      onError: (error: unknown) => {
        toast.error(
          handleApiError(error, GENERIC_MESSAGE.TASK_DELETED_FAILED),
        );
      },
    });
  };

  if (isPending) {
    return (
      <p className="text-sm text-slate-400">Loading tasks...</p>
    );
  }

  if (isError) {
    return (
      <p className="text-sm text-red-400">
        {error instanceof Error ? error.message : "Failed to load tasks."}
      </p>
    );
  }

  return (
    <div className="w-full min-w-0 space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Tasks
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Keep track of your learning, practice, and project work.
          </p>
        </div>

        <div className="shrink-0">
          <AddTask />
        </div>
      </div>

      {/* Summary */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-white/6 py-4 sm:gap-x-10">
        <div>
          <span className="text-xs text-slate-500">Open</span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {openTasks}
          </span>
        </div>

        <div className="hidden h-4 w-px bg-white/8 sm:block" />

        <div>
          <span className="text-xs text-slate-500">Completed</span>
          <span className="ml-2 text-sm font-medium text-slate-200">
            {completedTasks}
          </span>
        </div>

        <div className="hidden h-4 w-px bg-white/8 sm:block" />

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">Progress</span>

          <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs font-medium tabular-nums text-slate-300">
            {progress}%
          </span>
        </div>
      </div>

      {/* Task Board */}
      <div className="grid w-full min-w-0 grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-6 xl:gap-10">
        {columns.map((column) => {
          const columnTasks = tasks.filter(
            (task) => task.status === column,
          );

          return (
            <section key={column} className="w-full min-w-0">
              {/* Column Heading */}
              <div className="mb-2 flex items-center gap-2">
                {column === "done" && (
                  <CheckCircle2
                    className="size-3.5 shrink-0 text-emerald-400/70"
                    strokeWidth={1.75}
                  />
                )}

                <h2 className="text-xs font-medium text-slate-400">
                  {columnLabels[column]}
                </h2>

                <span className="text-[11px] tabular-nums text-slate-600">
                  {columnTasks.length}
                </span>
              </div>

              {/* Tasks */}
              <div className="w-full min-w-0">
                {columnTasks.map((task) => {
                  const previousStatus = getPreviousStatus(task.status);
                  const nextStatus = getNextStatus(task.status);

                  return (
                    <div
                      key={task.id}
                      className="group relative w-full min-w-0 border-b border-white/6 py-4 pl-3 transition-colors hover:bg-white/2"
                    >
                      {/* Priority Indicator */}
                      <span
                        className={`absolute left-0 top-4.5 h-3 w-0.5 rounded-full ${priorityStyles[task.priority]}`}
                      />

                      {/* Title */}
                      <p
                        className={`wrap-break-word pr-2 text-[13px] leading-relaxed ${
                          task.status === "done"
                            ? "text-slate-600 line-through"
                            : "text-slate-300"
                        }`}
                      >
                        {task.title}
                      </p>

                      {/* Description */}
                      {task.description && (
                        <p className="mt-1 wrap-break-word pr-2 text-xs leading-relaxed text-slate-500">
                          {task.description}
                        </p>
                      )}

                      {/* Metadata */}
                      <div className="mt-3 flex w-full min-w-0 flex-nowrap items-center gap-1.5">
                        <span className="shrink-0 text-[10px] text-slate-500">
                          {task.priority}
                        </span>

                        {task.due_date && (
                          <span className="shrink-0 whitespace-nowrap text-[10px] text-slate-500">
                            {task.due_date}
                          </span>
                        )}

                        <Badge
                          variant="outline"
                          className="h-5 shrink-0 rounded border-0 bg-white/4 px-1.5 text-[10px] font-normal text-slate-500"
                        >
                          {task.tag}
                        </Badge>

                        {/* Actions */}
                        <div className="ml-auto flex shrink-0 items-center gap-0.5 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                          <EditTask tasks={task} />

                          {previousStatus && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-6 text-slate-600 hover:bg-white/5 hover:text-slate-300"
                              aria-label="Move task backward"
                              disabled={updateTask.isPending}
                              onClick={() =>
                                moveTask(task.id, previousStatus)
                              }
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
                              disabled={updateTask.isPending}
                              onClick={() =>
                                moveTask(task.id, nextStatus)
                              }
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
                            disabled={deleteTask.isPending}
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