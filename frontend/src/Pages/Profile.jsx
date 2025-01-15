import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/app/profiles", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        setError(
          error.response?.data?.message || "Failed to fetch profile data"
        );
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        User Profile
      </h2>
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Username: <span className="font-normal">{profileData.username}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Email: <span className="font-normal">{profileData.email}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Total Posts:{" "}
          <span className="font-normal">{profileData.Posts}</span>
        </p>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        My Uploaded Posts
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.MyPosts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300"
          >
            {/* Display Image */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Description:</strong> {post.description}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Location:</strong> {post.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
