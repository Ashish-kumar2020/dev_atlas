export const AUTH_MESSAGES = {
  SIGNUP_SUCCESS: "Account created successfully.",
  SIGNUP_FAILED: "Signup failed. Please try again.",
  LOGIN_SUCCESS: "Logged in successfully.",
  LOGIN_FAILED: "Login failed. Please try again.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  EMAIL_ALREADY_EXISTS: "An account with this email already exists.",
  OTP_SENT: "Verification code sent successfully.",
  OTP_VERIFIED: "Account verified successfully.",
  INVALID_OTP: "Invalid verification code.",
  PASSWORD_RESET_SUCCESS: "Password reset successfully.",
  PASSWORD_MISMATCH: "Passwords do not match.",
  NETWORK_ERROR: "Unable to connect. Please check your internet connection.",
  SERVER_ERROR: "Something went wrong on the server. Please try again.",
  ALL_FIELDS_REQUIRED:"All Fields are mandatory"
} as const;


