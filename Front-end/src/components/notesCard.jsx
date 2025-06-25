import React from "react";

const NotesCard = ({ notes }) => {
  return (
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-5 py-5 md:py-10 rounded-xl">
      {notes.map((note, i) => (
        <div
          key={i}
          className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg flex flex-col p-4"
        >
          <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
            {note.title}
          </h2>

          {note.description && (
            <p className="text-justify text-sm sm:text-base mb-4">
              {note.description}
            </p>
          )}

          <div className="w-full flex justify-between gap-2 mt-auto">
            <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
              Edit
            </button>
            <button className="flex-1 bg-gray-300 text-black py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesCard;
