import apiClient from "@/api/apiClient";
import type { ADD_NOTES_PAYLOAD, NOTES_CREATE_RESPONSE, NOTES_DELETE_RESPONSE, NOTES_LIST_RESPONSE, NOTES_UPDATE_RESPONSE } from "./notes.types";



const getAuthHeaders = (): { Authorization: string } => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const notesPostAPI = async (
  payload: ADD_NOTES_PAYLOAD,
): Promise<NOTES_CREATE_RESPONSE> => {
  const result = await apiClient.post<NOTES_CREATE_RESPONSE>(
    "/notes",
    payload,
    { headers: getAuthHeaders() },
  );
  return result.data;
};

export const notesGetAPI =
  async (): Promise<NOTES_LIST_RESPONSE> => {
    const result = await apiClient.get<NOTES_LIST_RESPONSE>(
      "/notes",
      { headers: getAuthHeaders() },
    );

    return result.data;
  };

export const deleteNotesAPI = async (
  id: string,
): Promise<NOTES_DELETE_RESPONSE> => {
  const result = await apiClient.delete<NOTES_DELETE_RESPONSE>(
    `/notes/${id}`,
    { headers: getAuthHeaders() },
  );

  return result.data;
};

export const editNotesAPI = async (
  id: string,
  payload: ADD_NOTES_PAYLOAD,
): Promise<NOTES_UPDATE_RESPONSE> => {
  const result = await apiClient.patch<NOTES_UPDATE_RESPONSE>(
    `/notes/${id}`,
    payload,
    { headers: getAuthHeaders() },
  );

  return result.data;
};