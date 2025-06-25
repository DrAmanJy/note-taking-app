export default function getLocalNotes() {
  const data = localStorage.getItem("notes");
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse notes from localStorage", e);
    return [];
  }
}
