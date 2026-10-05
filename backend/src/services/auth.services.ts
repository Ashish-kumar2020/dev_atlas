import pool from "../config/db.js";

// LOGIN Service
export const userLoginDataService =async (email: string, password: string) => {
  const result = await pool.query(
    `SELECT EXISTS (SELECT 1 FROM USERS WHERE EMAIL = $1 AND PASSWORD = $2)`,
    [email,password],
  );
  return result.rows[0].exists;
};

// SIGNUP Servive
export const userSignUpDataService = async (
  userName: string,
  email: string,
  password: string,
) => {
  const result = await pool.query(
    `INSERT INTO users (user_name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, user_name, email
    `,
    [userName,email,password],
  );
  return result.rows[0];
};

// FORGOT-PASSWORD Service
export const forgotPasswordService = async(
  email: string
) => {
  const result = await pool.query(`SELECT EXISTS (SELECT 1 FROM USERS WHERE EMAIL = $1)`, [email]);
  return result.rows[0].exists; 
}


// UPDATE-PASSWORD Service
export const updatePasswordService = async( email: string, password: string) => {
  const result = await pool.query(`UPDATE USERS SET PASSWORD = $1 WHERE EMAIL = $2`,[password,email]);
  return result.rowCount;
}


// Verify Service - OTP
export const verifyUserDetailsService = (otp: string) => {
  return {
    otp,
  };
};
