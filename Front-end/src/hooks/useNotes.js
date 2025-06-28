import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import getLocalNotes from "../utils/getLocalNotes";
import {
  getNotes as getNotesFromBackend,
  addNote as saveNoteToBackend,
  updateNote as updateNoteToBackend,
  deleteNote as deleteNoteFromBackend,
} from "../services/notesService";

const useNotes = () => {
  const { mode, user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      if (mode === "online") {
        try {
          const res = await getNotesFromBackend();
          setNotes(res.notes || []);
        } catch (err) {
          console.error("Failed to fetch notes from server:", err.message);
        }
      } else {
        setNotes(getLocalNotes());
      }
    };

    loadNotes();
  }, [mode, user]);

  const addNote = async (note) => {
    if (mode === "online") {
      try {
        const saved = await saveNoteToBackend(note);
        setNotes((prev) => [...prev, saved.note]);
      } catch (err) {
        console.error("Failed to save note to server:", err.message);
      }
    } else {
      const updated = [...notes, note];
      setNotes(updated);
      localStorage.setItem("notes", JSON.stringify(updated));
    }
  };

  const handleDelete = async (id) => {
    if (mode === "online") {
      try {
        await deleteNoteFromBackend(id);
        setNotes((prev) => prev.filter((note) => note._id !== id));
      } catch (err) {
        console.error("Failed to delete note:", err.message);
      }
    } else {
      const updated = notes.filter((_, i) => i !== id);
      setNotes(updated);
      localStorage.setItem("notes", JSON.stringify(updated));
    }
  };

  const handleEdit = (index) => {
    const note = notes[index];
    setTitle(note.title);
    setDescription(note.description);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setEditIndex(null);
  };

  const handleSave = async () => {
    const noteToEdit = notes[editIndex];

    if (!title || !description) {
      console.warn("Title and description are required.");
      return;
    }

    if (mode === "online") {
      try {
        const updated = await updateNoteToBackend(
          { title, description },
          noteToEdit._id
        );
        const updatedNotes = notes.map((n) =>
          n._id === noteToEdit._id ? updated.note : n
        );
        setNotes(updatedNotes);
      } catch (err) {
        console.error("Failed to update note:", err.message);
      }
    } else {
      const updatedNotes = notes.map((note, i) =>
        i === editIndex ? { ...note, title, description } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    handleCancel();
  };

  return {
    notes,
    addNote,
    handleDelete,
    handleEdit,
    handleCancel,
    handleSave,
    title,
    description,
    setTitle,
    setDescription,
    editIndex,
  };
};

export default useNotes;
