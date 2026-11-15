import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteTopicAPI, editTopicAPI, topicGetAPI, topicPostAPI } from "./topic.api";
import type { ADD_TOPIC_PAYLOAD, EDIT_TOPIC_PAYLOAD } from "./topic.types";



export const topicKeys = {
  all: ["topic"] as const,
};

export const useTopics = () => {
  return useQuery({
    queryKey: topicKeys.all,
    queryFn: topicGetAPI,
  });
};

export const useAddTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload : ADD_TOPIC_PAYLOAD) => topicPostAPI(payload),
    onSuccess: async () => {
      console.log("Topic CREATED SUCCESSFULLY");

      await queryClient.invalidateQueries({
        queryKey: topicKeys.all
      });
    },
  });
};

export const useDeleteTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subjectId : string) =>  deleteTopicAPI(subjectId),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: topicKeys.all,
      });
    },
  });
};

export const useEditTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ subject_id, payload }: EDIT_TOPIC_PAYLOAD) =>
      editTopicAPI(subject_id, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: topicKeys.all,
        exact: true,
      });
    },
  });
};