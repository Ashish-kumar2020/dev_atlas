import apiClient from "@/api/apiClient";
import type { LoginApiResponse, LoginPayload, SignupApiResponse, SignupPayload } from "./types/auth.types";

export const signupApi = async(payload: SignupPayload) => {
   const result = await apiClient.post<SignupApiResponse>("/auth/signup",payload);
   return result.data;
}

export const loginApi = async(payload : LoginPayload) =>{
   const result = await apiClient.post<LoginApiResponse>("/auth/login",payload);
   return result.data;
}