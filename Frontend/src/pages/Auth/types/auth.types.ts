export type SignupPayload = {
  user_name: string;
  email: string;
  password: string;
};

type userSignUpData = {
  id: string;
  user_name: string;
  email: string;
}

export type SignupApiResponse = {
  message: string;
  userSignUpData: userSignUpData
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

export type USER = {
  email: string,
  id: string,
  user_name: string
}

export type LoginApiResponse = {
  message: string;
  token: string,
  user:USER
};