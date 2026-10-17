import pool from "../config/db.js";
import { sendOTPService } from "./otp.service.js";
import bcrypt from "bcrypt";
// LOGIN Service
export const userLoginDataService = async (email: string, password: string) => {
  const result = await pool.query(
    `SELECT id, user_name, email, password, is_email_verified from users where email = $1`,
    [email],
  );

  if (result.rows.length === 0) {
    throw Object.assign(new Error("Invalid email or password"), {
      statusCode: 401,
    });
  }

  const user = result.rows[0];

  if (!user.is_email_verified) {
    throw Object.assign(
      new Error("Please verify your email before logging in"),
      {
        statusCode: 403,
      },
    );
  }
  const isPasswordValid = await bcrypt.compare(password,user.password);

  if (!isPasswordValid) {
    throw Object.assign(new Error("Invalid email or password"), {
      statusCode: 401,
    });
  }
  return {
    id: user.id,
    user_name: user.user_name,
    email: user.email
  };
};

// SIGNUP Servive
export const userSignUpDataService = async (
  user_name: string,
  email: string,
  password: string,
) => {
  const existingUser = await pool.query(
    `SELECT ID FROM USERS WHERE EMAIL = $1`,
    [email],
  );

  if (existingUser.rows.length > 0) {
    throw Object.assign(new Error("Email already registered"), {
      statusCode: 409,
    });
  }

  const result = await pool.query(
    `INSERT INTO users (user_name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, user_name, email
    `,
    [user_name, email, password],
  );

  await sendOTPService(result.rows[0]?.id, email);

  return result.rows[0];
};

// FORGOT-PASSWORD Service
export const forgotPasswordService = async (email: string) => {
  const result = await pool.query(
    `SELECT EXISTS (SELECT 1 FROM USERS WHERE EMAIL = $1)`,
    [email],
  );
  return result.rows[0].exists;
};

// UPDATE-PASSWORD Service
export const updatePasswordService = async (
  email: string,
  password: string,
) => {
  const result = await pool.query(
    `UPDATE USERS SET PASSWORD = $1 WHERE EMAIL = $2`,
    [password, email],
  );
  return result.rowCount;
};

// Verify Service - OTP
export const verifyUserDetailsService = (otp: string) => {
  return {
    otp,
  };
};
