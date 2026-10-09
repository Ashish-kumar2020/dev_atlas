import pool from "../config/db.js"



export const createBookmarkCategoryService = async (user_id: string, category_name: string) => {
    const result = await pool.query(`
        INSERT INTO BOOKMARK_CATEGORY (user_id, category_name) VALUES ($1, $2) RETURNING *    
    `,[user_id, category_name]);
    return result.rows[0];
};


export const fetchAllBookmarkCategoryService = async (user_id: string) =>{
    const result = await pool.query(`
        SELECT * FROM BOOKMARK_CATEGORY WHERE user_id = $1 
    `,[user_id]);
    return result.rows;
};

export const updateBookmarkCategoryService = async (user_id: string, id: string, category_name?: string) =>{
    const result = await pool.query(`
        UPDATE BOOKMARK_CATEGORY SET CATEGORY_NAME = COALESCE($1, category_name) WHERE USER_ID = $2 AND ID = $3 RETURNING *    
    `,[category_name, user_id,id]);
    return result.rows[0];
}

export const deleteBookmarkCategoryService = async (user_id: string, id:string) => {
    const result = await pool.query(`
        DELETE FROM BOOKMARK_CATEGORY WHERE ID = $1 AND USER_ID = $2 RETURNING *
    `,[id,user_id]);
    return result.rows[0];
}