export type UserProfileData = {
  user_id: string;
  user_name: string;
  user_email: string;
  users_skills: string[];
  user_current_company: string;
  total_experience_years: number | "";
  total_experience_months: number | "";
  linkedin_url: string;
  github_url: string;
};


export type ProfileApiResonse = {
  message: string
}