import { useEffect, useState } from "react";
import AddTaskForm from "../components/addTaskForm";
import LoginWarning from "../components/loginWarning";
import getLocalNotes from "../utils/getLocalNotes";
import NotesCard from "../components/notesCard";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getLocalNotes());
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const newNotes = [...notes, data];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-sky-500 via-sky-700 to-sky-900">
      <div className="flex flex-col items-center gap-5 pt-24 px-4">
        <AddTaskForm onSubmit={onSubmit} />
        <LoginWarning />
        <NotesCard setNotes={setNotes} notes={notes} />
      </div>
    </div>
  );
};

export default Home;
