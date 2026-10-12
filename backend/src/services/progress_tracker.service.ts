import pool from "../config/db.js";

interface CreateProgressPayload {
  user_id: string;
  topic_id: string;
}

export const updateProgressService = async ({
  user_id,
  topic_id,
}: CreateProgressPayload) => {
  const query = `
    INSERT INTO progress_tracker (
      user_id,
      topic_id,
      is_completed,
      completed_at
    )
    VALUES ($1, $2, TRUE, NOW())
    ON CONFLICT (user_id, topic_id)
    DO UPDATE SET
      is_completed = TRUE,
      completed_at = NOW()
    RETURNING *;
  `;

  const result = await pool.query(query, [user_id, topic_id]);

  return result.rows[0];
};

export const getParentTopicProgressService = async (
  user_id: string,
  topic_id: string
) => {
  const query = `
    SELECT
      parent.id AS topic_id,
      parent.topic_name,
      COUNT(child.id)::INT AS total_topics,
      COUNT(child.id) FILTER (
        WHERE progress.is_completed = TRUE
      )::INT AS completed_topics
    FROM topics current_topic
    JOIN topics parent
      ON parent.id = COALESCE(
        current_topic.parent_topic_id,
        current_topic.id
      )
    LEFT JOIN topics child
      ON child.parent_topic_id = parent.id
    LEFT JOIN progress_tracker progress
      ON progress.topic_id = child.id
      AND progress.user_id = $1
    WHERE current_topic.id = $2
    GROUP BY parent.id, parent.topic_name;
  `;

  const result = await pool.query(query, [user_id, topic_id]);

  return result.rows[0];
};

export const getUserProgressService = async (user_id: string) => {
  const query = `
    SELECT
      pt.id AS progress_id,
      pt.user_id,
      pt.topic_id,
      t.topic_name,
      t.parent_topic_id,
      s.id AS subject_id,
      s.subject_name,
      pt.is_completed,
      pt.completed_at
    FROM progress_tracker pt
    JOIN topics t
      ON t.id = pt.topic_id
    JOIN subjects s
      ON s.id = t.subject_id
    WHERE pt.user_id = $1
    ORDER BY pt.completed_at DESC NULLS LAST;
  `;

  const result = await pool.query(query, [user_id]);

  return result.rows;
};