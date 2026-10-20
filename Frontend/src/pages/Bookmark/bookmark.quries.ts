import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  bookmarkGetAPI,
  bookmarkPostAPI,
  deleteBookmarkAPI,
} from "./bookmark.api";

import type { BookMarkStates } from "./bookmark.types";

export const bookmarkKeys = {
  all: ["bookmarks"] as const,
};

export const useBookmarks = () => {
  return useQuery({
    queryKey: bookmarkKeys.all,
    queryFn: bookmarkGetAPI,
  });
};

export const useAddBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: BookMarkStates) => bookmarkPostAPI(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookmarkKeys.all,
      });
    },
  });
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookmarkId: string) => deleteBookmarkAPI(bookmarkId),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookmarkKeys.all,
      });
    },
  });
};