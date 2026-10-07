import pool from "../config/db.js"

export const topicCreationService = async(subject_id: string,topic_name: string, description?: string,parent_topic_id? : string) => {
    const result = await pool.query(`INSERT INTO TOPICS (subject_id, topic_name, description,parent_topic_id) VALUES ($1, $2, $3, $4) RETURNING id, subject_id, topic_name, description,parent_topic_id`, [subject_id, topic_name, description,parent_topic_id]);
    return result.rows[0];
}