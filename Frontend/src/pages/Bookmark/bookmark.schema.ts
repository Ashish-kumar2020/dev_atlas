import { z } from "zod";

export const bookmarkSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  bookmark_link: z
    .string()
    .trim()
    .url("Enter a valid URL"),
});

export type BookmarkFormData = z.infer<typeof bookmarkSchema>;