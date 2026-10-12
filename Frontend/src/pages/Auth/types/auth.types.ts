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
