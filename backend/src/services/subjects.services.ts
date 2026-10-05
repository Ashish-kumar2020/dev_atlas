import pool from "../config/db.js"



export const subjectCreationService = async(user_id: string, subject_name: string, description?: string) => {
    const result = await pool.query(
        `INSERT INTO SUBJECTS (user_id, subject_name, description) VALUES ($1, $2, $3) RETURNING id, user_id, subject_name, description`,[user_id,subject_name,description]
    );
    return result.rows[0];
}