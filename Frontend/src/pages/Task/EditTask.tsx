import { useState } from "react";
import { Edit } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Field, FieldGroup } from "../../../@/components/ui/field";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";

import {
  items,
  priority,
  type Task,
  type TASK_POST_PAYLOAD,
} from "./task.types";

import { DropDown } from "./DropDown";
import { DateSelector } from "./DateSelector";
import { useEditTask } from "./task.queries";
import { toast } from "sonner";
import { handleApiError } from "@/api/handleApiError";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";

type EditTaskProps = {
  tasks: Task;
};

export function EditTask({ tasks }: EditTaskProps) {
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState<TASK_POST_PAYLOAD>({
    task_title: tasks.title,
    task_description: tasks.description,
    due_date: tasks.due_date,
    priority: tasks.priority,
    status: tasks.status,
  });

  const editTasksApi = useEditTask();

  const handleTaskData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await editTasksApi.mutateAsync({
        id: tasks.id,
        payload: editTask,
      });

      toast.success("Task updated successfully");
      setOpen(false);
    } catch (error: unknown) {
      toast.error(handleApiError(error, GENERIC_MESSAGE.TASK_ADDED_FAILED));
    }
  };

  const handleTaskUpdate = (
    fieldName: keyof TASK_POST_PAYLOAD,
    value: string,
  ) => {
    setEditTask((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-6 text-slate-600 hover:bg-white/5 hover:text-slate-300"
            aria-label={`Edit ${tasks.title}`}
          >
            <Edit className="size-3" />
          </Button>
        }
      />

      <DialogContent className="border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-white">
            Edit Task
          </DialogTitle>

          <DialogDescription className="text-sm text-zinc-400">
            Update your task details below. Make the necessary changes and save
            when you're done.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="task-title" className="text-zinc-300">
              Task Title
            </Label>

            <Input
              id="task-title"
              name="task_title"
              placeholder="Enter task title"
              value={editTask.task_title}
              onChange={(e) => handleTaskUpdate("task_title", e.target.value)}
              className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
            />
          </Field>

          <Field>
            <Label htmlFor="task-description" className="text-zinc-300">
              Description
            </Label>

            <Textarea
              id="task-description"
              name="task_description"
              placeholder="Enter task description"
              value={editTask.task_description}
              onChange={(e) =>
                handleTaskUpdate("task_description", e.target.value)
              }
              className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
            />
          </Field>

          <div className="flex gap-4">
            <DropDown
              items={items}
              placeHolder="Select Task Status"
              value={editTask.status}
              onChange={handleTaskUpdate}
              fieldName="status"
            />

            <DropDown
              items={priority}
              placeHolder="Select Task Priority"
              value={editTask.priority}
              fieldName="priority"
              onChange={handleTaskUpdate}
            />
          </div>

          <DateSelector
            value={editTask.due_date}
            fieldName="due_date"
            onChange={handleTaskUpdate}
          />
        </FieldGroup>

        <DialogFooter className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 sm:rounded-b-xl">
          <DialogClose
            render={
              <Button
                type="button"
                variant="outline"
                className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                Cancel
              </Button>
            }
          />

          <Button
            type="submit"
            disabled={editTasksApi.isPending}
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleTaskData}
          >
            {editTasksApi.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
