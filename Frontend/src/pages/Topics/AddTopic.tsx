
import { useState } from "react";
import type { MouseEvent } from "react";
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

import { handleApiError } from "@/api/handleApiError";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";

import type { ADD_TOPIC_PAYLOAD } from "./topic.types";
import { useAddTopic } from "./topic.queries";
import { topicSchema } from "./topic.schema";

type AddTopicProps = {
  subjectId: string;
  parentTopicId: string | null;
};

const AddTopic = ({
  subjectId,
  parentTopicId,
}: AddTopicProps) => {
  const [addTopic, setAddTopic] = useState<ADD_TOPIC_PAYLOAD>({
    topic_name: "",
    subject_id: subjectId,
    parent_topic_id: parentTopicId,
    description: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ADD_TOPIC_PAYLOAD, string>>
  >({});

  const addTopics = useAddTopic();

  const addNewTopic = (
    fieldName: keyof ADD_TOPIC_PAYLOAD,
    value: string,
  ): void => {
    setAddTopic((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleAddTopic = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    console.log("ADD TOPIC", addTopic)

    const result = topicSchema.safeParse(addTopic);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.log("ANY ERROR", fieldErrors)
      setErrors({
        topic_name: fieldErrors.topic_name?.[0],
        description: fieldErrors.description?.[0],
        parent_topic_id: fieldErrors.parent_topic_id?.[0],
        subject_id: fieldErrors.subject_id?.[0],
      });

      return;
    }

    setErrors({});

    try {
      await addTopics.mutateAsync({
        ...result.data,
        description: result.data.description ?? null,
        parent_topic_id: result.data.parent_topic_id ?? null,
      });

      setAddTopic({
        topic_name: "",
        subject_id: subjectId,
        parent_topic_id: parentTopicId,
        description: "",
      });

      toast.success(GENERIC_MESSAGE.TOPIC_ADDED_SUCCESS);
    } catch (error: unknown) {
      toast.error(
        handleApiError(error, GENERIC_MESSAGE.TOPIC_ADDED_FAILED),
      );
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
              Create a topic
            </DialogTitle>

            <DialogDescription className="text-sm leading-5 text-zinc-400">
              Add a topic to organize your learning.
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="px-6 py-6">
        <FieldGroup className="gap-5">
          <Field className="gap-2">
            <Label
              htmlFor="topic-title"
              className="text-sm font-medium text-zinc-200"
            >
              Topic name <span className="text-red-400">*</span>
            </Label>

            <Input
              id="topic-title"
              name="topic_name"
              value={addTopic.topic_name}
              onChange={(e) =>
                addNewTopic("topic_name", e.target.value)
              }
              placeholder="e.g. JavaScript Fundamentals"
              className="h-10 border-zinc-800 bg-zinc-900/70 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
            />

            {errors.topic_name && (
              <p className="text-xs text-red-400">
                {errors.topic_name}
              </p>
            )}

            <p className="text-xs text-zinc-500">
              Choose a clear name that describes what you're learning.
            </p>
          </Field>

          <Field className="gap-2">
            <Label
              htmlFor="topic-description"
              className="text-sm font-medium text-zinc-200"
            >
              Description{" "}
              <span className="font-normal text-zinc-500">
                (Optional)
              </span>
            </Label>

            <Textarea
              id="topic-description"
              name="description"
              placeholder="What do you want to learn in this topic?"
              rows={4}
              value={addTopic.description ?? ""}
              onChange={(e) =>
                addNewTopic("description", e.target.value)
              }
              className="min-h-27.5 resize-y border-zinc-800 bg-zinc-900/70 text-sm leading-6 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
            />

            {errors.description && (
              <p className="text-xs text-red-400">
                {errors.description}
              </p>
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
          disabled={addTopics.isPending}
          className="h-9 bg-blue-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
          onClick={handleAddTopic}
        >
          <Plus className="mr-2 size-4" />
          {addTopics.isPending ? "Creating..." : "Create Topic"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddTopic;
