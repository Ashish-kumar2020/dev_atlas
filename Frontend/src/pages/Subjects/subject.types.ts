export type ADD_SUBJECT_PAYLOAD = {
  subject_name: string;
  description?: string;
};

export type SUBJECT = {
  id: string;
  user_id: string;
  subject_name: string;
  description: string | null;
};

export type SUBJECT_CREATE_RESPONSE = {
  message: string;
  subjectCreation: SUBJECT;
};

export type SUBJECT_UPDATE_RESPONSE = {
  message: string;
  updatedSubjects: SUBJECT;
};

export type SUBJECT_DELETE_RESPONSE = {
  message: string;
  deletedSubjects: SUBJECT;
};

export type SUBJECT_LIST_RESPONSE = {
  message: string;
  subjectsData: SUBJECT[];
};

export type EDIT_SUBJECT_PAYLOAD = {
  subject_id: string;
  payload: ADD_SUBJECT_PAYLOAD;
};

export type SubjectEntries = {
  id: string;
  user_id: string;
  subject_name: string;
  description: string | null;
};