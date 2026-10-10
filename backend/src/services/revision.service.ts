import pool from "../config/db.js";

// Add topic to revision tracker
export const createRevisionService = async (
  user_id: string,
  topic_id: string
) => {
  const result = await pool.query(
    `
      INSERT INTO revision_tracker (user_id, topic_id)
      VALUES ($1, $2)
      RETURNING *
    `,
    [user_id, topic_id]
  );

  return result.rows[0];
};

// Fetch revision topics for a user
export const fetchRevisionService = async (user_id: string) => {
  const result = await pool.query(
    `
      SELECT *
      FROM revision_tracker
      WHERE user_id = $1
    `,
    [user_id]
  );

  return result.rows;
};

// Remove topic from revision tracker
export const deleteRevisionService = async (
  revision_id: string,
  user_id: string
) => {
  const result = await pool.query(
    `
      DELETE FROM revision_tracker
      WHERE id = $1 AND user_id = $2
      RETURNING *
    `,
    [revision_id, user_id]
  );

  return result.rows[0];
};