import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold text-sky-700">
          TaskManager
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to={"/auth?type=login"}
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
