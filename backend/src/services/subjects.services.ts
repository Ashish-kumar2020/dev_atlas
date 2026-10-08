import pool from "../config/db.js"


// --------------------- CREATE SUBJECT SERVICE ----------------------------------
export const subjectCreationService = async(user_id: string, subject_name: string, description?: string) => {
    const result = await pool.query(
        `INSERT INTO SUBJECTS (user_id, subject_name, description) VALUES ($1, $2, $3) RETURNING id, user_id, subject_name, description`,[user_id,subject_name,description]
    );
    return result.rows[0];
}

// ------------------- UPDATE SUBJECT SERVICE --------------------------------
export const updateSubjectService = async (subject_id: string, subject_name? : string, description?: string) => {
    const result = await pool.query(`
        UPDATE subjects set SUBJECT_NAME = COALESCE($1, subject_name) , DESCRIPTION = COALESCE($2, description) WHERE ID = $3 RETURNING *     
    `,[subject_name, description, subject_id]);
    return result.rows[0];
}

// ------------------- DELETE SUBJECT SERVICE --------------------------
export const deleteSubjectService = async (subject_id: string) => {
    const result = await pool.query(`
        DELETE FROM SUBJECTS WHERE ID = $1 RETURNING *    
    `,[subject_id]);
    return result.rows[0];
}

// ------------------ GET ALL SUBJECTS --------------------------
export const fetchAllSubjectsService = async () => {
    const result = await pool.query(
        `SELECT * FROM SUBJECTS`
    );
    return result.rows;
}