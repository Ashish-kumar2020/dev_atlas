import { useState } from "react";
import { BookOpen, Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../../../@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../@/components/ui/dialog";
import { Field, FieldGroup } from "../../../@/components/ui/field";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";

import type { ADD_SUBJECT_PAYLOAD } from "./subject.types";
import { useAddSubject } from "./subject.queries";
import { subjectSchema } from "./subject.schema";

import { handleApiError } from "@/api/handleApiError";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";

const AddSubject = () => {
  const [addSubjects, setAddSubjects] = useState<ADD_SUBJECT_PAYLOAD>({
    subject_name: "",
    description: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ADD_SUBJECT_PAYLOAD, string>>
  >({});

  const addSubject = useAddSubject();

  const addNewSubject = (
    fieldName: keyof ADD_SUBJECT_PAYLOAD,
    value: string,
  ): void => {
    setAddSubjects((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleAddSubject = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();

    const result = subjectSchema.safeParse(addSubjects);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        subject_name: fieldErrors.subject_name?.[0],
        description: fieldErrors.description?.[0],
      });

      return;
    }

    setErrors({});

    try {
      await addSubject.mutateAsync({
        ...result.data,
        description: result.data.description ?? "",
      });

      setAddSubjects({
        subject_name: "",
        description: "",
      });

      toast.success("Subject created successfully");
    } catch (error: unknown) {
      toast.error(handleApiError(error, GENERIC_MESSAGE.SUBJECT_ADDED_FAILED));
    }
  };

  return (
    <DialogContent className="gap-0 overflow-hidden border border-zinc-800 bg-zinc-950 p-0 text-zinc-100 shadow-2xl sm:max-w-120">
      <DialogHeader className="border-b border-zinc-800 px-6 py-5">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
            <BookOpen className="size-5 text-blue-400" />
          </div>

          <div className="space-y-1">
            <DialogTitle className="text-lg font-semibold tracking-tight text-white">
              Create a subject
            </DialogTitle>

            <DialogDescription className="text-sm leading-5 text-zinc-400">
              Organize your learning by creating a new subject.
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="px-6 py-6">
        <FieldGroup className="gap-5">
          <Field className="gap-2">
            <Label
              htmlFor="subject-title"
              className="text-sm font-medium text-zinc-200"
            >
              Subject name <span className="text-red-400">*</span>
            </Label>

            <Input
              id="subject-title"
              name="subject_name"
              value={addSubjects.subject_name}
              onChange={(e) => addNewSubject("subject_name", e.target.value)}
              placeholder="e.g. JavaScript, System Design"
              className="h-10 border-zinc-800 bg-zinc-900/70 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
            />

            {errors.subject_name && (
              <p className="text-xs text-red-400">{errors.subject_name}</p>
            )}

            <p className="text-xs text-zinc-500">
              Choose a clear name that describes what you're learning.
            </p>
          </Field>

          <Field className="gap-2">
            <Label
              htmlFor="subject-description"
              className="text-sm font-medium text-zinc-200"
            >
              Description{" "}
              <span className="font-normal text-zinc-500">(Optional)</span>
            </Label>

            <Textarea
              id="subject-description"
              name="description"
              placeholder="What do you want to learn in this subject?"
              rows={4}
              value={addSubjects.description}
              onChange={(e) => addNewSubject("description", e.target.value)}
              className="min-h-27.5 resize-y border-zinc-800 bg-zinc-900/70 text-sm leading-6 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
            />

            {errors.description && (
              <p className="text-xs text-red-400">{errors.description}</p>
            )}

            <p className="text-xs text-zinc-500">
              Add a short overview of your learning goals.
            </p>
          </Field>
        </FieldGroup>
      </div>

      <DialogFooter className="flex-row justify-end gap-3 border-t border-zinc-800 bg-zinc-900/40 px-6 py-4">
        <DialogClose
          render={
            <Button
              type="button"
              variant="outline"
              className="h-9 border-zinc-700 bg-transparent px-4 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Cancel
            </Button>
          }
        />

        <Button
          type="button"
          disabled={addSubject.isPending}
          className="h-9 bg-blue-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
          onClick={handleAddSubject}
        >
          <Plus className="mr-2 size-4" />
          {addSubject.isPending ? "Creating..." : "Create Subject"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddSubject;
