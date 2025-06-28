import getLocalNotes from "./getLocalNotes";
import { addNote } from "../services/notesService";

export const saveNotesToBackend = async () => {
  const localNotes = getLocalNotes();

  if (!localNotes.length) {
    return;
  }

  for (const note of localNotes) {
    try {
      if (note.title && note.description) {
        await addNote({
          title: note.title,
          description: note.description,
        });
      }
    } catch (err) {
      console.error("Failed to migrate note:", err.message, note);
    }
  }
  localStorage.removeItem("notes");
};
