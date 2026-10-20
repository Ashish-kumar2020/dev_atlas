import apiClient from "@/api/apiClient";
import type { BookMarkStates } from "./bookmark.types";

export const bookmarkPostAPI = async (payload: BookMarkStates) => {
  const token = localStorage.getItem("token");
  const result = await apiClient.post<BookMarkStates>("/bookmark", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const bookmarkGetAPI = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const result = await apiClient.get("/bookmark", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const deleteBookmarkAPI = async (bookmark_id: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const result = await apiClient.delete(`/bookmark/${bookmark_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
