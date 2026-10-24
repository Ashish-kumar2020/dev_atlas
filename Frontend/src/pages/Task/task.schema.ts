import { z } from "zod";

export const taskSchema = z.object({
  task_title: z.string().trim().min(1, "Title is required"),

  task_description: z.string().trim().optional(),

  status: z.enum(["backlog", "inProgress", "done"], {
    message: "Please select a valid status",
  }),

  priority: z.enum(["low", "medium", "high"], {
    message: "Please select a valid priority",
  }),

  due_date: z.union([z.string().date("Invalid due date"), z.literal("")]),
});

export type TaskData = z.infer<typeof taskSchema>;
