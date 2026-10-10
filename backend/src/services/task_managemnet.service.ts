import pool from "../config/db.js";

// ------------------------- CREATE TASK SERVICE -------------------------------

export const createTaskService = async (
  user_id: string,
  task_title: string,
  task_description?: string,
  status?: string,
  priority?: string,
  due_date?: string,
) => {
  const result = await pool.query(
    `
        INSERT INTO TASK_MANAGEMENT (user_id, task_title, task_description, status, priority, due_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `,
    [user_id, task_title, task_description, status, priority, due_date],
  );
  return result.rows[0];
};


// ----------------------------- UPDATE TASK SERVICE ------------------------------
export const updateTaskService = async (user_id: string,id: string ,task_title?: string, task_description?: string, status?: string, priority?: string, due_date?: string) => {
    const result = await pool.query(`
        UPDATE TASK_MANAGEMENT SET TASK_TITLE = COALESCE($1, task_title), TASK_DESCRIPTION = COALESCE($2, task_description) , STATUS = COALESCE($3, status) , PRIORITY = COALESCE($4, priority) , DUE_DATE = COALESCE($5, due_date) WHERE ID = $6 AND user_id = $7 RETURNING *    
    `,[task_title, task_description,status, priority,due_date, id, user_id]);
    return result.rows[0]
}


// ---------------------------- DELETE TASK SERVICE ---------------------------------
export const deleteTaskService = async(id: string, user_id: string) => {
    const result = await pool.query(`
        DELETE FROM TASK_MANAGEMENT WHERE ID = $1 AND USER_ID = $2 RETURNING *    
    `,[id, user_id]);
    return result.rows[0];
}

// ------------------------- FETCH ALL TASK -----------------------------------
export const fetchAllTaskService = async(user_id: string) => {
    const result = await pool.query(`
        SELECT * FROM TASK_MANAGEMENT WHERE USER_ID = $1
    `,[user_id]);
    return result.rows;
}