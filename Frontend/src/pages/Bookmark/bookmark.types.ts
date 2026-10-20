export type BookMarkStates = {
  title: string;
  bookmark_link: string;
};

export type BookmarkEntries = {
  bookmark_link: string;
  category_id?: string | null;
  id: string;
  title: string;
  user_id: string;
};

export type FetchBookmarksResponse = {
  message: string;
  userBookmarkData: BookmarkEntries[];
};

export type BookmarkApiResponse = {
  message: string;
  bookmarkData: BookmarkEntries;
};