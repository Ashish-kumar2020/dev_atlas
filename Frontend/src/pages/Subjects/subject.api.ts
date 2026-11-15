import apiClient from "@/api/apiClient";

import type {
  ADD_SUBJECT_PAYLOAD,
  SUBJECT_CREATE_RESPONSE,
  SUBJECT_UPDATE_RESPONSE,
  SUBJECT_DELETE_RESPONSE,
  SUBJECT_LIST_RESPONSE,
} from "./subject.types";

const getAuthHeaders = (): { Authorization: string } => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication token not found");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const subjectPostAPI = async (
  payload: ADD_SUBJECT_PAYLOAD,
): Promise<SUBJECT_CREATE_RESPONSE> => {
  const result = await apiClient.post<SUBJECT_CREATE_RESPONSE>(
    "/subject",
    payload,
    { headers: getAuthHeaders() },
  );
  return result.data;
};

export const subjectGetAPI =
  async (): Promise<SUBJECT_LIST_RESPONSE> => {
    const result = await apiClient.get<SUBJECT_LIST_RESPONSE>(
      "/subject",
      { headers: getAuthHeaders() },
    );

    return result.data;
  };

export const deleteSubjectAPI = async (
  subject_id: string,
): Promise<SUBJECT_DELETE_RESPONSE> => {
  const result = await apiClient.delete<SUBJECT_DELETE_RESPONSE>(
    `/subject/${subject_id}`,
    { headers: getAuthHeaders() },
  );

  return result.data;
};

export const editSubjectAPI = async (
  subject_id: string,
  payload: ADD_SUBJECT_PAYLOAD,
): Promise<SUBJECT_UPDATE_RESPONSE> => {
  const result = await apiClient.patch<SUBJECT_UPDATE_RESPONSE>(
    `/subject/${subject_id}`,
    payload,
    { headers: getAuthHeaders() },
  );

  return result.data;
};