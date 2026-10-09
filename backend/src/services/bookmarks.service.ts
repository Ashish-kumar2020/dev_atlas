import pool from "../config/db.js"



export const createBookmarkService = async (user_id: string, title: string,bookmark_link: string, category_id?: string) => {
    const result = await pool.query(`
        INSERT INTO BOOKMARK (user_id, title, bookmark_link,category_id) VALUES ($1, $2, $3, $4) RETURNING *    
    `,[user_id, title,bookmark_link, category_id]);
    return result.rows[0];
}

export const fetchUserBookmarkService = async(user_id: string) => {
    const result = await pool.query(`
        SELECT * FROM BOOKMARK WHERE user_id = $1    
    `,[user_id]);
    return result.rows;
}

export const updateBookmarkService = async(id: string,user_id: string, title?: string, bookmark_link?: string,category_id?: string) => {
    const result = await pool.query(`
        UPDATE BOOKMARK SET TITLE = COALESCE($1, title), BOOKMARK_LINK = COALESCE($2,bookmark_link), CATEGORY_ID = COALESCE($3, category_id) WHERE ID = $4 AND USER_ID = $5 RETURNING *
    `,[title, bookmark_link, category_id ?? null, id, user_id]);
    return result.rows[0]
}

export const deleteBookmarkService = async(id: string,user_id: string) => {
    const result = await pool.query(`
        DELETE FROM BOOKMARK WHERE ID = $1 AND USER_ID = $2 RETURNING *    
    `,[id,user_id]);
    return result.rows[0];
}