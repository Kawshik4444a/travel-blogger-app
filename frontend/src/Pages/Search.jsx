import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setMessage("Please enter a location to search.");
      setPosts([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://travel-blogger-app.onrender.com/api/app/search?location=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setPosts(response.data.posts);
      setMessage("");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Error occurred while searching for posts."
      );
      setPosts([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Search Posts by Location
      </h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>
      {message && (
        <p className="text-center text-red-600 font-medium mt-4">{message}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{post.description}</p>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}

            <p className="text-sm text-gray-500">
              <strong>Location:</strong> {post.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
