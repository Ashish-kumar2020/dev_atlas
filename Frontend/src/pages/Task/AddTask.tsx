import { Plus } from "lucide-react";
import { Button } from "../../../@/components/ui/button";
import {Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "../../../@/components/ui/dialog";
import { Field, FieldGroup } from "../../../@/components/ui/field";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";
import { items, priority } from "./task.types";
import { DropDown } from "./DropDown";
import { DateSelector } from "./DateSelector";

export function AddTask() {
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
                name="title"
                placeholder="Enter task title"
                className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
              />
            </Field>

            <Field>
              <Label htmlFor="description" className="text-zinc-300">
                Description
              </Label>
              <Textarea
                placeholder="Enter task description"
                name="description"
                className="border-zinc-800 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-blue-500"
              />
            </Field>
            <div className="flex gap-4">
                 <DropDown items={items} placeHolder="Select Task Status"/>
                <DropDown items={priority} placeHolder="Select Task Priority"/>
            </div>
            <DateSelector/>
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
            >
              Save Task
            </Button>
          </DialogFooter>{" "}
        </DialogContent>
      </form>
    </Dialog>
  );
}
