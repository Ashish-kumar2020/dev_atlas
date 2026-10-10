import pool from "../config/db.js";

// 1. Create Favourite
export const createFavouriteService = async (
  user_id: string,
  note_id?: string,
  bookmark_id?: string,
  topic_id?: string
) => {
  const result = await pool.query(
    `
      INSERT INTO favourite (
        user_id,
        note_id,
        bookmark_id,
        topic_id
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
    [
      user_id,
      note_id ?? null,
      bookmark_id ?? null,
      topic_id ?? null,
    ]
  );

  return result.rows[0];
};

// 2. Fetch All Favourites for a User
export const fetchAllFavouriteService = async (user_id: string) => {
  const result = await pool.query(
    `
      SELECT *
      FROM favourite
      WHERE user_id = $1
    `,
    [user_id]
  );

  return result.rows;
};

// 3. Delete Favourite
export const deleteFavouriteService = async (
  favourite_id: string,
  user_id: string
) => {
  const result = await pool.query(
    `
      DELETE FROM favourite
      WHERE id = $1 AND user_id = $2
      RETURNING *
    `,
    [favourite_id, user_id]
  );

  return result.rows[0];
};