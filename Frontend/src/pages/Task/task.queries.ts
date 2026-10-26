import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTaskAPI,
  EditTaskAPI,
  taskGetAPI,
  taskPostAPI,
  UpdateTaskAPI,
} from "./Task.api";
import type {  TASK_POST_PAYLOAD } from "./task.types";

type UpdateTaskPayload = {
  task_id: string;
  status: "backlog" | "inProgress" | "done";
};

export const taskKeys = {
  all: ["tasks"] as const,
};

export const useTask = () => {
  return useQuery({
    queryFn: taskGetAPI,
    queryKey: taskKeys.all,
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: TASK_POST_PAYLOAD) => taskPostAPI(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskKeys.all,
      });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task_id: string) => deleteTaskAPI(task_id),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskKeys.all,
      });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ task_id, status }: UpdateTaskPayload) =>
      UpdateTaskAPI(task_id, { status }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskKeys.all,
      });
    },
  });
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: TASK_POST_PAYLOAD;
    }) => EditTaskAPI(id, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskKeys.all,
      });
    },
  });
};
