export type ADD_NOTES_PAYLOAD = {
  title: string;
  description?: string;
  topic_id: string;
};

export type NOTES = {
  title: string;
  description?: string | null;
  topic_id: string;
};

export type NOTES_CREATE_RESPONSE = {
  message: string;
  subjectCreation: NOTES;
};

export type NOTES_LIST_RESPONSE = {
  message: string;
  subjectsData: NOTES[];
};

export type NOTES_DELETE_RESPONSE = {
  message: string;
  deletedSubjects: NOTES;
};

export type NOTES_UPDATE_RESPONSE = {
  message: string;
  updatedSubjects: NOTES;
};

export type EDIT_NOTES_PAYLOAD = {
  subject_id: string;
  payload: ADD_NOTES_PAYLOAD;
};