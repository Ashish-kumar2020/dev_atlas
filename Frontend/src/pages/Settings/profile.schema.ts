import {z} from "zod";

export const profileSchema = z.object({
    user_id: z.string().uuid(),
    user_name: z.string().min(2, "Name must contain at least 2 Characters"),
    user_email: z.string().email("Enter a valid Email Address"),
    users_skills: z.array(z.string().min(1)).min(1, "Add at least one skill"),
    user_current_company: z.string(),
    total_experience_months: z.number().int().min(0).max(11),
    total_experience_years: z.number().int().min(0),
    linkedin_url: z.union([z.string().url("Invalid Linkedin URL"), z.literal("")]),
    github_url: z.union([z.string().url("Invalid Github URL"), z.literal("")]),
});

export type UserProfileData = z.infer<typeof profileSchema>;

