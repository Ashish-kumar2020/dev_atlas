
import {z} from "zod";

export const subjectSchema = z.object({
    subject_name:  z.string().trim().min(1, "Subject Name is Required"),
    description: z.string().optional().or(z.literal("")),
});

export type SubjectFormData = z.infer<typeof subjectSchema>