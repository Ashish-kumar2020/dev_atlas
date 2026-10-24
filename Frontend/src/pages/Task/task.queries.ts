import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteTaskAPI, taskGetAPI, taskPostAPI } from "./Task.api"
import type { TASK_POST_PAYLOAD } from "./task.types"



export const taskKeys = {
    all: ["tasks"] as const,
}

export const useTask = () => {
    return useQuery({
        queryFn: taskGetAPI,
        queryKey: taskKeys.all
    })
}

export const useAddTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: TASK_POST_PAYLOAD) => taskPostAPI(payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: taskKeys.all
            });
        },
    });
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (task_id: string) => deleteTaskAPI(task_id),

        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: taskKeys.all
            })
        }
    })
}