import apiClient from "@/api/apiClient";
import type {
  ADD_TOPIC_PAYLOAD,
  TOPIC_CREATE_RESPONSE,
  TOPIC_DELETE_RESPONSE,
  TOPIC_LIST_RESPONSE,
  TOPIC_UPDATE_RESPONSE,
} from "./topic.types";

const getAuthHeaders = (): { Authorization: string } => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token not found");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const topicPostAPI = async (
  payload: ADD_TOPIC_PAYLOAD,
): Promise<TOPIC_CREATE_RESPONSE> => {
  const result = await apiClient.post<TOPIC_CREATE_RESPONSE>(
    "/topic",
    payload,
    { headers: getAuthHeaders() },
  );
  return result.data;
};

export const topicGetAPI = async (): Promise<TOPIC_LIST_RESPONSE> => {
  const result = await apiClient.get<TOPIC_LIST_RESPONSE>("/topic", {
    headers: getAuthHeaders(),
  });
  return result.data;
};


export const deleteTopicAPI = async (topic_id : string) : Promise<TOPIC_DELETE_RESPONSE> => {
    const result = await apiClient.delete<TOPIC_DELETE_RESPONSE>(`/topic/${topic_id}`, {headers: getAuthHeaders()});
    return result.data
};

export const editTopicAPI = async(topic_id: string, payload: ADD_TOPIC_PAYLOAD) => {
    const result = await apiClient.patch<TOPIC_UPDATE_RESPONSE>(`/topic/${topic_id}`, payload, {headers: getAuthHeaders()});

    return result.data;
}