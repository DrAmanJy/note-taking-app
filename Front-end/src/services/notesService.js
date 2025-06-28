const BASE_URL = import.meta.env.VITE_API_URL;
const NOTES_URL = `${BASE_URL}/notes`;

export const getNotes = async () => {
  const res = await fetch(NOTES_URL, {
    credentials: "include",
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to fetch notes");

  return result;
};

export const addNote = async (data) => {
  const res = await fetch(NOTES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to add note");

  return result;
};

export const updateNote = async (data, id) => {
  const res = await fetch(`${NOTES_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to update note");

  return result;
};

export const deleteNote = async (id) => {
  const res = await fetch(`${NOTES_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to delete note");

  return result;
};
