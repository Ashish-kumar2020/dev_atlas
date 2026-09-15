type NoteData = {
  title: string;
  content: string;
};

export const createNotesService = (noteData: NoteData) => {
  return {
    id: "temp-123",
    ...noteData,
  };
};

export const fetchUniqueNotesService = (noteId: string) => {
  return {
    id: noteId,
  };
};

export const fetchQueriedNotesService = (
  tagReceived: string,
  limit: string,
) => {
  return {
    tagReceived,
    limit,
  };
};
