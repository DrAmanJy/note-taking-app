import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found" });
    }
    return res.status(200).json({ notes });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ note });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const addNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ message: "Please provide title" });
    }
    if (!description) {
      return res.status(400).json({ message: "Please provide description" });
    }

    const newNote = await Note.create({ title, description });
    return res.status(201).json({ message: "Note added", note: newNote });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateNote = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({ message: "Note updated", note: updatedNote });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({ message: "Note deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
