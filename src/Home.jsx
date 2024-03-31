import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Link
          to="/todoapi"
          className="block bg-purple-500 text-white px-4 py-2 rounded-md mr-4 mb-4"
        >
          TodoAPI
        </Link>
        <Link
          to="/localstorage"
          className="block bg-purple-500 text-white px-4 py-2 rounded-md"
        >
          TodoLocalStorage
        </Link>
      </div>
    </div>
  );
};

export default Home;
