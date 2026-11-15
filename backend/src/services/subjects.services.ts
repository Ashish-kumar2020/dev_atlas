import pool from "../config/db.js";

// --------------------- SUBJECT TYPE -----------------------------

export type Subject = {
  id: string;
  user_id: string;
  subject_name: string;
  description: string | null;
};

// --------------------- CREATE SUBJECT SERVICE -----------------------------

export const subjectCreationService = async (
  user_id: string,
  subject_name: string,
  description?: string,
): Promise<Subject | undefined> => {
  const result = await pool.query<Subject>(
    `INSERT INTO subjects
      (user_id, subject_name, description)
     VALUES ($1, $2, $3)
     RETURNING id, user_id, subject_name, description`,
    [user_id, subject_name, description ?? null],
  );

  return result.rows[0];
};

// --------------------- UPDATE SUBJECT SERVICE -----------------------------

export const updateSubjectService = async (
  subject_id: string,
  subject_name?: string,
  description?: string,
): Promise<Subject | undefined> => {
  const result = await pool.query<Subject>(
    `UPDATE subjects
     SET
       subject_name = COALESCE($1, subject_name),
       description = COALESCE($2, description)
     WHERE id = $3
     RETURNING id, user_id, subject_name, description`,
    [subject_name ?? null, description ?? null, subject_id],
  );

  return result.rows[0];
};

// --------------------- DELETE SUBJECT SERVICE -----------------------------

export const deleteSubjectService = async (
  subject_id: string,
): Promise<Subject | undefined> => {
  const result = await pool.query<Subject>(
    `DELETE FROM subjects
     WHERE id = $1
     RETURNING id, user_id, subject_name, description`,
    [subject_id],
  );

  return result.rows[0];
};

// --------------------- GET ALL SUBJECTS SERVICE -----------------------------

export const fetchAllSubjectsService = async (): Promise<Subject[]> => {
  const result = await pool.query<Subject>(
    `SELECT id, user_id, subject_name, description
     FROM subjects`,
  );

  return result.rows;
};