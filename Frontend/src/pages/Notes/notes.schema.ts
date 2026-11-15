
import {z} from "zod";

export const notesSchema = z.object({
    title:  z.string().trim().min(1, "Note Title is Required"),
    description: z.string().optional().or(z.literal("")),
    topic_id: z.string().uuid(),
});

export type NotesFormData = z.infer<typeof notesSchema>