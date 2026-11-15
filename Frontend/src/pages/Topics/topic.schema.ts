
import {z} from "zod";

export const topicSchema = z.object({
    topic_name:  z.string().trim().min(1, "Topic Name is Required"),
    description: z.string().optional().or(z.literal("")),
    subject_id: z.string().uuid(),
  parent_topic_id: z.string().uuid().nullable()
});

export type SubjectFormData = z.infer<typeof topicSchema>