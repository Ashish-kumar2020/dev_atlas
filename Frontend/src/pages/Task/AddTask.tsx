import { Plus } from "lucide-react";
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
import { items, priority, type TASK_POST_PAYLOAD } from "./task.types";
import { DropDown } from "./DropDown";
import { DateSelector } from "./DateSelector";
import { useState } from "react";
import { taskSchema } from "./task.schema";
import { useAddTask } from "./task.queries";
import { toast } from "sonner";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";
import { handleApiError } from "@/api/handleApiError";

export function AddTask() {
  const [task, setTask] = useState<TASK_POST_PAYLOAD>({
    task_title: "",
    task_description: "",
    status: "",
    priority: "",
    due_date: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof TASK_POST_PAYLOAD, string>>
  >({});

  const addTask = useAddTask();

  const updateTaskDetails = (key: keyof TASK_POST_PAYLOAD, value: string) => {
    console.log(key, value);
    setTask((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleTaskData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = taskSchema.safeParse(task);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        task_title: fieldErrors.task_title?.[0],
        task_description: fieldErrors.task_description?.[0],
        status: fieldErrors.status?.[0],
        priority: fieldErrors.priority?.[0],
        due_date: fieldErrors.due_date?.[0],
      });

      return;
    }
    setErrors({});

    const payload: TASK_POST_PAYLOAD = {
      ...result.data,
      task_description: result.data.task_description ?? "",
    };

    try {
      await addTask.mutateAsync(payload);
      toast.success(GENERIC_MESSAGE.TASK_ADDED_SUCCESS);
      setTask({
        task_title: "",
        task_description: "",
        priority: "",
        status: "",
        due_date: "",
      });
    } catch (error: unknown) {
      toast.error(handleApiError(error, GENERIC_MESSAGE.TASK_ADDED_FAILED));
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button className="h-8 rounded-md bg-blue-600 px-3 text-xs font-medium text-white hover:bg-blue-700">
              <Plus className="mr-1.5 size-3.5" />
              Add Task
            </Button>
          }
        />

        <DialogContent className="border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-white">
              Add Task
            </DialogTitle>

            <DialogDescription className="text-sm text-zinc-400">
              Create a new task. Fill in the details below and save when you're
              done.
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
                value={task.task_title}
                onChange={(e) =>
                  updateTaskDetails("task_title", e.target.value)
                }
                className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
              />
              {errors.task_title && (
                <p className="text-xs text-red-400">{errors.task_title}</p>
              )}
            </Field>

            <Field>
              <Label htmlFor="description" className="text-zinc-300">
                Description
              </Label>
              <Textarea
                placeholder="Enter task description"
                value={task.task_description}
                onChange={(e) =>
                  updateTaskDetails("task_description", e.target.value)
                }
                name="description"
                className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
              />
              {errors.task_description && (
                <p className="text-xs text-red-400">
                  {errors.task_description}
                </p>
              )}
            </Field>
            <div className="flex gap-4">
              <DropDown
                items={items}
                placeHolder="Select Task Status"
                value={task.status}
                fieldName="status"
                onChange={updateTaskDetails}
                error={errors.status}

              />
              <DropDown
                items={priority}
                placeHolder="Select Task Priority"
                value={task.priority}
                fieldName="priority"
                onChange={updateTaskDetails}
                error={errors.priority}
              />
            </div>
            <DateSelector value={task.due_date} fieldName="due_date" onChange={updateTaskDetails} error={errors.due_date}/>

          </FieldGroup>
          <DialogFooter className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 sm:rounded-b-xl">
            <DialogClose
              render={
                <Button
                  variant="outline"
                  className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Cancel
                </Button>
              }
            />
           

            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleTaskData}
            >
              Save Task
            </Button>
          </DialogFooter>{" "}
        </DialogContent>
      </form>
    </Dialog>
  );
}
