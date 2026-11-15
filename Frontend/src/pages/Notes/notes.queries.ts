import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteNotesAPI, editNotesAPI, notesGetAPI, notesPostAPI } from "./notes.api";
import type { ADD_NOTES_PAYLOAD, EDIT_NOTES_PAYLOAD } from "./notes.types";



export const notesKeys = {
  all: ["notes"] as const,
};

export const useSubjects = () => {
  return useQuery({
    queryKey: notesKeys.all,
    queryFn: notesGetAPI,
  });
};


export const useAddNotes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload : ADD_NOTES_PAYLOAD) => notesPostAPI(payload),
    onSuccess: async () => {
      console.log("NOTE CREATED SUCCESSFULLY");

      await queryClient.invalidateQueries({
        queryKey: notesKeys.all
      });
    },
  });
};

export const useDeleteNotes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subjectId : string) =>  deleteNotesAPI(subjectId),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: notesKeys.all,
      });
    },
  });
};

export const useEditNotes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ subject_id, payload }: EDIT_NOTES_PAYLOAD) =>
      editNotesAPI(subject_id, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: notesKeys.all,
        exact: true,
      });
    },
  });
};