import axios from "axios";
import { AUTH_MESSAGES } from "@/constants/messages";

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    // Network error: request was made but no response was received.
    if (!error.response) {
      return AUTH_MESSAGES.NETWORK_ERROR;
    }

    // Server error: HTTP status 500 or higher.
    if (error.response.status >= 500) {
      return AUTH_MESSAGES.SERVER_ERROR;
    }

    // Other HTTP errors.
    return AUTH_MESSAGES.SIGNUP_FAILED;
  }

  // Unexpected JavaScript or application error.
  return AUTH_MESSAGES.SIGNUP_FAILED;
};