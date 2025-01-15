import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Welcome to Your Dashboard!
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Add Post Button */}
        <Link to="/add-post">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add Post
          </button>
        </Link>

        {/* Explore Button */}
        <Link to="/all-Posts">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Explore
          </button>
        </Link>

        {/* Search Button */}
        <Link to="/search">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Search
          </button>
        </Link>

        {/* Profile Button */}
        <Link to="/profile">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
