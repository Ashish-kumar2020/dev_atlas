export type ADD_TOPIC_PAYLOAD = {
  subject_id: string;
  parent_topic_id: string | null;
  topic_name: string;
  description: string | null;
};

export type TOPIC = {
  id: string;
  subject_id: string;
  parent_topic_id: string | null;
  topic_name: string;
  description: string | null;
};

export type TOPIC_CREATE_RESPONSE = {
    message: string,
    updatedTopic : TOPIC
}

export type TOPIC_LIST_RESPONSE = {
  message: string;
  allTopics: TOPIC[];
};

export type TOPIC_DELETE_RESPONSE = {
  message: string;
  deletedTopics: TOPIC;
};

export type TOPIC_UPDATE_RESPONSE = {
  message: string;
  updatedSubjects: TOPIC;
};


export type EDIT_TOPIC_PAYLOAD = {
  subject_id: string;
  payload: ADD_TOPIC_PAYLOAD;
};