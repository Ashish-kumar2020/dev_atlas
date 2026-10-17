import apiClient from "@/api/apiClient";
import type { ProfileApiResonse, UserProfileData } from "./profile.types";


export const profileAPI = async (payload: UserProfileData) => {
    const result = await apiClient.post<ProfileApiResonse>("/profile/create-profile", payload);
    return result.data;
}