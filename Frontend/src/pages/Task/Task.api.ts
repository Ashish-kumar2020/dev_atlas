import apiClient from "@/api/apiClient";
import type { TASK_POST_PAYLOAD } from "./task.types";

export const taskPostAPI = async (payload: TASK_POST_PAYLOAD) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const result = await apiClient.post<TASK_POST_PAYLOAD>("/task", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const taskGetAPI = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const result = await apiClient.get("/task", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const deleteTaskAPI = async (task_id: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }
  const result = await apiClient.delete(`/task/${task_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
