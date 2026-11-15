import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteSubjectAPI,
  editSubjectAPI,
  subjectGetAPI,
  subjectPostAPI,
} from "./subject.api";

import type {
  ADD_SUBJECT_PAYLOAD,
  EDIT_SUBJECT_PAYLOAD,
} from "./subject.types";

export const subjectKeys = {
  all: ["subject"] as const,
};

export const useSubjects = () => {
  return useQuery({
    queryKey: subjectKeys.all,
    queryFn: subjectGetAPI,
  });
};

export const useAddSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload : ADD_SUBJECT_PAYLOAD) => subjectPostAPI(payload),
    onSuccess: async () => {
      console.log("SUBJECT CREATED SUCCESSFULLY");

      await queryClient.invalidateQueries({
        queryKey: subjectKeys.all
      });
    },
  });
};

export const useDeleteSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subjectId : string) =>  deleteSubjectAPI(subjectId),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: subjectKeys.all,
      });
    },
  });
};

export const useEditSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ subject_id, payload }: EDIT_SUBJECT_PAYLOAD) =>
      editSubjectAPI(subject_id, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: subjectKeys.all,
        exact: true,
      });
    },
  });
};