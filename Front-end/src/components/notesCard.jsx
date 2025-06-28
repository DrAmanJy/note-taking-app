import { useRef, useEffect } from "react";

const NotesCard = ({
  notes,
  handleDelete,
  handleEdit,
  handleSave,
  handleCancel,
  title,
  description,
  setTitle,
  setDescription,
  editIndex,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [description]);

  return (
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-5 py-5 md:py-10 rounded-xl">
      {notes.map((note, i) => (
        <div
          key={note._id || i}
          className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg flex flex-col p-4"
        >
          {editIndex === i ? (
            <>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2"
              />
              <textarea
                value={description}
                ref={textareaRef}
                onChange={(e) => setDescription(e.target.value)}
                className="text-sm sm:text-base overflow-hidden mb-4 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          ) : (
            <>
              <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
                {note.title}
              </h2>
              <p className="text-justify text-sm sm:text-base mb-4">
                {note.description}
              </p>
            </>
          )}

          <div className="w-full flex justify-between gap-2 mt-auto">
            {editIndex === i ? (
              <>
                <button
                  onClick={() => handleSave(i)}
                  className="flex-1 bg-green-500 text-white py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(i)}
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id || i)}
                  className="flex-1 bg-gray-300 text-black py-2 px-4 rounded"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesCard;
