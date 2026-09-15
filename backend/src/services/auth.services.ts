// LOGIN Service
export const userLoginDataService = (userName: string, password: string) => {
  return {
    userName,
    password,
  };
};

// SIGNUP Servive
export const userSignUpDataService = (
  userName: string,
  email: string,
  password: string,
) => {
  return {
    userName,
    email,
    password,
  };
};

// Verify Service - OTP
export const verifyUserDetailsService = (otp: string) => {
  return {
    otp,
  };
};
