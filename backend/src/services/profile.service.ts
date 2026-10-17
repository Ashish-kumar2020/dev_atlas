import pool from "../config/db.js";

type ProfileInput = {

  skills?: string[] | null;
  current_company?: string | null;
  experience_years?: number | null;
  experience_months?: number | null;
  linkedin_url?: string | null;
  github_url?: string | null;
};

// 1. Create Profile
export const createProfileService = async (
  user_id: string,
  profile: ProfileInput = {},
) => {
  const {
  
    skills = [],
    current_company = null,
    experience_years = null,
    experience_months = null,
    linkedin_url = null,
    github_url = null,
  } = profile;

  const result = await pool.query(
    `
      INSERT INTO profile (
        user_id,
        skills,
        current_company,
        experience_years,
        experience_months,
        linkedin_url,
        github_url
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
    [
      user_id,
   
      skills,
      current_company,
      experience_years,
      experience_months,
      linkedin_url,
      github_url,
    ],
  );

  return result.rows[0];
};

// 2. Fetch Profile
export const fetchProfileService = async (user_id: string) => {
  const result = await pool.query(
    `
      SELECT *
      FROM profile
      WHERE user_id = $1
    `,
    [user_id],
  );

  return result.rows[0];
};

// 3. Update Profile
export const updateProfileService = async (
  user_id: string,
  profile: ProfileInput,
) => {
  const editableColumns = [
    
    "skills",
    "current_company",
    "experience_years",
    "experience_months",
    "linkedin_url",
    "github_url",
  ] as const;

  // Include only fields explicitly provided by the client.
  const entries = editableColumns
    .filter((column) => profile[column] !== undefined)
    .map((column) => [column, profile[column]] as const);

  // No fields to update: return the existing profile.
  if (entries.length === 0) {
    return fetchProfileService(user_id);
  }

  const values: unknown[] = [user_id];

  const assignments = entries.map(([column, value], index) => {
    values.push(value);
    return `${column} = $${index + 2}`;
  });

  const result = await pool.query(
    `
      UPDATE profile
      SET ${assignments.join(", ")}
      WHERE user_id = $1
      RETURNING *
    `,
    values,
  );

  return result.rows[0];
};