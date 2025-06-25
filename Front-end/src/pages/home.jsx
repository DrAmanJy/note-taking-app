const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-sky-500 via-sky-700 to-sky-900">
      <div className="flex flex-col items-center gap-5 pt-24 px-4">
        <div className="w-full max-w-6xl mx-auto p-4 bg-gray-100 rounded-xl shadow-md">
          <form className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <input
              type="text"
              placeholder="Task title"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Task details"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
            >
              Add
            </button>
          </form>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-2 px-4">
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow text-center text-sm sm:text-base">
            <strong>Note:</strong> Login to save your tasks permanently. When
            not logged in, your tasks are only saved in your browser's
            localStorage and may be lost.
          </div>
        </div>

        <div className="w-full max-w-6xl min-h-[60vh] flex flex-wrap justify-center gap-5 py-5 md:py-10 rounded-xl">
          <div className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg  flex flex-col justify-between p-4">
            <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
              abcdefghijklmnopqrstuvwxyza
            </h2>
            <p className="text-justify text-sm sm:text-base mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              laudantium, officia asperiores recusandae quo ad, delectus animi
              excepturi quos vitae qui unde voluptas eos aliquid eius quasi cum
              nihil repellendus?
            </p>
            <div className="w-full flex justify-between gap-2">
              <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button className="flex-1 bg-gray-300 text-black py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg  flex flex-col justify-between p-4">
            <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
              abcdefghijklmnopqrstuvwxyza
            </h2>
            <p className="text-justify text-sm sm:text-base mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              laudantium, officia asperiores recusandae quo ad, delectus animi
              excepturi quos vitae qui unde voluptas eos aliquid eius quasi cum
              nihil repellendus?
            </p>
            <div className="w-full flex justify-between gap-2">
              <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button className="flex-1 bg-gray-300 text-black py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg  flex flex-col justify-between p-4">
            <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
              abcdefghijklmnopqrstuvwxyza
            </h2>
            <p className="text-justify text-sm sm:text-base mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              laudantium, officia asperiores recusandae quo ad, delectus animi
              excepturi quos vitae qui unde voluptas eos aliquid eius quasi cum
              nihil repellendus?
            </p>
            <div className="w-full flex justify-between gap-2">
              <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button className="flex-1 bg-gray-300 text-black py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[48%] xl:w-[32%] bg-red-50 rounded-lg  flex flex-col justify-between p-4">
            <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-base mb-2">
              abcdefghijklmnopqrstuvwxyza
            </h2>
            <p className="text-justify text-sm sm:text-base mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              laudantium, officia asperiores recusandae quo ad, delectus animi
              excepturi quos vitae qui unde voluptas eos aliquid eius quasi cum
              nihil repellendus?
            </p>
            <div className="w-full flex justify-between gap-2">
              <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button className="flex-1 bg-gray-300 text-black py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
