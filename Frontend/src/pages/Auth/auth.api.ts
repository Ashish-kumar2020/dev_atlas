import apiClient from "@/api/apiClient";
import type { SignupApiResponse, SignupPayload } from "./types/auth.types";

export const signupApi = async(payload: SignupPayload) => {
   const result = await apiClient.post<SignupApiResponse>("/auth/signup",payload);
   return result.data;
}