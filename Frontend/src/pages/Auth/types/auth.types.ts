export type SignupPayload = {
  user_name: string;
  email: string;
  password: string;
};

export type SignupApiResponse = {
  id: string;
  user_name: string;
  email: string;
};

export type SignupFormValues = {
  user_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// ---------------------------------------------- LOGIN TYPES -----------------------------------------

export type LoginPayload = {
  email: string;
  password: string;
}

export type LoginApiResponse = {
  message: string;
};