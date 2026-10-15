import pool from "../config/db.js";
import transporter from "../config/mailer.js";
import { generateOTP, hashOTP } from "../utils/generateOTP.js";

export const sendOtpEmailService = async (email: string, otp: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "DevAtlas Email Verification",
      html: `
        <h2>DevAtlas Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP expires in 5 minutes.</p>
        <p>If you didn't request this OTP, please ignore this email.</p>
    `,
    });
  } catch (error) {
    console.error("Error while sending the email:", error);
    throw error;
  }
};

export const sendOTPService = async (user_id: string, email: string) => {
  const existingOTP = await pool.query(
    `SELECT id,otp_hash, created_at,expires_at, attempts FROM EMAIL_OTPS WHERE USER_ID = $1 ORDER BY CREATED_AT DESC LIMIT 1`,
    [user_id],
  );
  if (existingOTP.rows.length > 0) {
    const createdAt = new Date(existingOTP.rows[0].created_at).getTime();
    const currentTime = Date.now();
    if (currentTime - createdAt < 60 * 1000) {
      throw new Error("Please wait 60 seconds before requesting another OTP");
    } else {
      await pool.query(
        `
            DELETE FROM EMAIL_OTPS WHERE ID = $1 RETURNING *
        `,
        [existingOTP.rows[0].id],
      );
    }
  }
  const userOTP = generateOTP();
  const otp_hash = hashOTP(userOTP);
  const expires_at = new Date(Date.now() + 5 * 60 * 1000);
  const result = await pool.query(
    `
        INSERT INTO email_otps (user_id,otp_hash,expires_at) VALUES ($1,$2,$3) RETURNING *   
    `,
    [user_id, otp_hash, expires_at],
  );

  try {
    await sendOtpEmailService(email, userOTP);
  } catch (error) {
    await pool.query(
      `
            DELETE FROM EMAIL_OTPS WHERE ID = $1 RETURNING *
        `,
      [result.rows[0].id],
    );
    throw error;
  }

  return { message: "OTP sent successfully" };
};
