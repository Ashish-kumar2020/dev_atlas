import pool from "../config/db.js";

// -------------------------- CREATE NOTE SERVICE -------------------------------------
export const createNotesService = async (
  title: string,
  description: string,
  topic_id: string,
) => {
  const result = await pool.query(
    `
      INSERT INTO NOTES (title,description,topic_id) VALUES ($1,$2,$3) RETURNING id, title, description, topic_id
      `,
    [title, description, topic_id],
  );
  return result.rows[0];
};

// ------------------------- UPDATE NOTES SERVICE -------------------------------------
export const updateNotesService = async (
  note_id: string,
  title?: string,
  description?: string,
) => {
  const result = await pool.query(
    `
      UPDATE notes SET TITLE = COALESCE($1, title), description = COALESCE($2, description) WHERE id = $3 RETURNING *
    `,
    [title, description, note_id],
  );
  return result.rows[0];
};

// ------------------------ DELETE NOTE SERVICE ----------------------------------------
export const deleteNoteService = async (note_id: string) => {
  const result = await pool.query(
    `DELETE FROM notes WHERE id = $1 RETURNING *`,
    [note_id],
  );
  return result.rows[0];
};

// ----------------------- FETCH ALL NOTES -----------------------------------------
export const fetchAllNotesService = async () => {
  const result =
    await pool.query(`SELECT notes.id AS note_id,notes.title AS note_title,notes.description AS note_description,topics.id AS topic_id,topics.topic_name AS topic_name, subjects.id AS subject_id,subjects.subject_name AS subject_name FROM notes INNER JOIN topics ON notes.topic_id = topics.id INNER JOIN subjects
ON topics.subject_id = subjects.id; `);
  return result.rows;
};
