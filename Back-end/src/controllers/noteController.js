export const getNotes = (req, res) => {
  if (notes.length === 0) {
    return res.status(404).json({ message: "No notes found" });
  }
  return res.status(200).json({ notes });
};
export const getNote = (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  return res.status(200).json({ note });
};
export const addNote = (req, res) => {
  let { id, title, description, completed } = req.body;
  if (!id) {
    return res.status(400).json({ message: "please provide id" });
  } else if (!title) {
    return res.status(400).json({ message: "please provide title" });
  } else if (!description) {
    return res.json({ message: "please provide description" });
  } else if (typeof completed !== "boolean") completed = false;
  const note = { id, title, description, completed };
  notes.push(note);
  return res.status(201).json({ message: "Note added", note });
};
export const updateNote = (req, res) => {
  const { title, description, completed } = req.body;
  const id = req.params.id;

  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  notes[index] = {
    ...notes[index],
    title,
    description,
    completed:
      typeof completed === "boolean" ? completed : notes[index].completed,
  };

  return res.status(200).json({
    message: "Note updated",
    note: notes[index],
  });
};
export const deleteNote = (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);
  return res.status(200).json({ message: "Note deleted" });
};
let notes = [
  {
    id: "1",
    title: "Express Notes",
    description: "Practicing Express controllers",
    completed: false,
  },
];
