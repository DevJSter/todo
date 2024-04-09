import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {/* Button to navigate to "/todoapi" route */}
        <Link to="/todoapi">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md mr-4 mb-4">
            TodoAPI
          </button>
        </Link>

        {/* Button to navigate to "/localstorage" route */}
        <Link to="/localstorage">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            TodoLocalStorage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
