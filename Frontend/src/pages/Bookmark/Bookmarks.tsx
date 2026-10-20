import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "../../../@/components/ui/button";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";
import { handleApiError } from "@/api/handleApiError";

import type {  BookmarkEntries, BookMarkStates } from "./bookmark.types";
import { bookmarkSchema } from "./bookmark.schema";
import {
  useAddBookmark,
  useBookmarks,
  useDeleteBookmark,
} from "./bookmark.quries";

const Bookmarks = () => {
  const [bookmarkData, setBookmarkData] = useState<BookMarkStates>({
    title: "",
    bookmark_link: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookMarkStates, string>>
  >({});

  const { data, isPending, isError, error, refetch } = useBookmarks();

  const addBookmark = useAddBookmark();
  const deleteBookmark = useDeleteBookmark();

  const handleBookmarkData = (key: keyof BookMarkStates, value: string) => {
    setBookmarkData((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: undefined,
    }));
  };

  console.log(data);

  const handleSubmitBookmarkData = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    const result = bookmarkSchema.safeParse(bookmarkData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        title: fieldErrors.title?.[0],
        bookmark_link: fieldErrors.bookmark_link?.[0],
      });

      return;
    }

    setErrors({});

    try {
      await addBookmark.mutateAsync(result.data);

      toast.success(GENERIC_MESSAGE.BOOKMARK_ADDED_SUCCESS);

      setBookmarkData({
        title: "",
        bookmark_link: "",
      });
    } catch (error: unknown) {
      toast.error(handleApiError(error, GENERIC_MESSAGE.BOOKMARK_ADDED_FAILED));
    }
  };

  const handleDeleteBookmark = (bookmarkId: string) => {
    deleteBookmark.mutate(bookmarkId, {
      onSuccess: () => {
        toast.success("Bookmark deleted successfully.");
      },
      onError: (error: unknown) => {
        toast.error(handleApiError(error, "Failed to delete bookmark."));
      },
    });
  };

  if (isPending) {
    return <p>Loading Bookmarks....</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Failed to load bookmarks: {error.message}</p>

        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Bookmarks
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Saved reading, kept out of your browser tabs.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-2">
        <input
          placeholder="Title"
          value={bookmarkData.title}
          onChange={(e) => handleBookmarkData("title", e.target.value)}
          className="h-9 min-w-0 flex-2 rounded-md border border-white/8 bg-[#0D151F] px-3 text-[13px] text-slate-200 outline-none placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
        />

        {errors.title && <p className="text-xs text-red-400">{errors.title}</p>}

        <input
          placeholder="Source or URL"
          value={bookmarkData.bookmark_link}
          onChange={(e) => handleBookmarkData("bookmark_link", e.target.value)}
          className="h-9 min-w-0 flex-3 rounded-md border border-white/8 bg-[#0D151F] px-3 text-[13px] text-slate-200 outline-none placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
        />

        {errors.bookmark_link && (
          <p className="text-xs text-red-400">{errors.bookmark_link}</p>
        )}

        <Button
          size="sm"
          onClick={handleSubmitBookmarkData}
          disabled={addBookmark.isPending}
          className="h-9 shrink-0 bg-blue-500 px-3.5 text-[13px] font-medium text-white hover:bg-blue-600"
        >
          <Plus className="size-4" strokeWidth={2} />

          {addBookmark.isPending ? "Adding Bookmark..." : "Add Bookmark"}
        </Button>
      </div>

      <ul className="divide-y divide-white/8 border-y border-white/8">
        {data?.userBookmarkData.map((bookmark : BookmarkEntries) => (
          <li
            className="group flex items-center justify-between gap-6 py-4"
            key={bookmark.id}
          >
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium text-slate-200">
                {bookmark.title}
              </p>

              <a
                href={bookmark.bookmark_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block truncate text-[12px] text-slate-500 visited:text-slate-500 hover:text-slate-500"
              >
                {bookmark.bookmark_link}
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="rounded bg-cyan-500/10 px-2 py-1 text-[10px] text-cyan-400">
                React
              </span>

              <button
                type="button"
                aria-label={`Remove ${bookmark.title}`}
                onClick={() => handleDeleteBookmark(bookmark.id)}
                disabled={deleteBookmark.isPending}
                className="
            rounded
            p-1.5
            text-slate-600
            opacity-0
            transition-all
            hover:bg-white/5
            hover:text-red-400
            group-hover:opacity-100
          "
              >
                <Trash2 className="size-3.5" strokeWidth={1.75} />
              </button>
            </div>
          </li>
        ))}

        {data?.userBookmarkData.length === 0 && (
          <li className="py-8 text-center text-sm text-slate-500">
            No bookmarks found. Add your first bookmark.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Bookmarks;
