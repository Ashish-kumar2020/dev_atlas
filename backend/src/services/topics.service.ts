import pool from "../config/db.js";

export const topicCreationService = async (
  subject_id: string,
  topic_name: string,
  description?: string,
  parent_topic_id?: string,
) => {
  const result = await pool.query(
    `INSERT INTO TOPICS (subject_id, topic_name, description,parent_topic_id) VALUES ($1, $2, $3, $4) RETURNING id, subject_id, topic_name, description,parent_topic_id`,
    [subject_id, topic_name, description, parent_topic_id],
  );
  return result.rows[0];
};

export const updateTopicService = async (
  topic_id: string,
  topic_name?: string,
  description?: string,
) => {
  const result = await pool.query(
    `
        UPDATE TOPICS SET TOPIC_NAME = COALESCE($1, topic_name), DESCRIPTION = COALESCE($2, description) WHERE ID = $3 RETURNING *    
    `,
    [topic_name, description, topic_id],
  );

  if (result.rows.length === 0) return null;
  const { subject_id } = result.rows[0];
  const topics = await pool.query(
    `
        SELECT * FROM topics WHERE subject_id = $1    
    `,
    [subject_id],
  );
  return topics.rows;
};

export const deleteTopicService = async (topic_id: string) => {
  const result = await pool.query(
    `
        DELETE FROM TOPICS WHERE ID = $1 RETURNING *
    `,
    [topic_id],
  );
  return result.rows[0];
};

export const fetchAllTopicsService = async () => {
  const result = await pool.query(`
        SELECT * FROM TOPICS    
    `);
  return result.rows;
};
