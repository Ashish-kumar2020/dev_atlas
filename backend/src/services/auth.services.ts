import pool from "../config/db.js";

// LOGIN Service
export const userLoginDataService = (userName: string, password: string) => {
  return {
    userName,
    password,
  };
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

// Verify Service - OTP
export const verifyUserDetailsService = (otp: string) => {
  return {
    otp,
  };
};
