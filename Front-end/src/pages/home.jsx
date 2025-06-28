import AddTaskForm from "../components/addTaskForm";
import LoginWarning from "../components/loginWarning";
import NotesCard from "../components/notesCard";
import { useAuth } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";

const Home = () => {
  const {
    notes,
    setNotes,
    addNote,
    handleDelete,
    handleEdit,
    handleSave,
    handleCancel,
    title,
    description,
    setTitle,
    setDescription,
    editIndex,
  } = useNotes();

  const { user } = useAuth();

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-sky-500 via-sky-700 to-sky-900">
      <div className="flex flex-col items-center gap-5 pt-24 px-4">
        <AddTaskForm onSubmit={addNote} />
        {!user && <LoginWarning />}
        <NotesCard
          notes={notes}
          setNotes={setNotes}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          editIndex={editIndex}
        />
      </div>
    </div>
  );
};

export default Home;
