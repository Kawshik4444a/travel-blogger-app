import React, { useEffect, useState } from "react";
import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/app/allpost", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include token if needed
          },
        });
        setPosts(response.data.posts);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch posts");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              {/* Optionally, you can display location if you still want */}
              {/* <p className="text-sm text-gray-500 mt-2">
                <strong>Location:</strong> {post.location}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
