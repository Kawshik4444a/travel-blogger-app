import React, { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://travel-blogger-app.onrender.com/api/app/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Save the access token (and optionally refresh token) to localStorage
        localStorage.setItem("accessToken", response.data.accessToken);
        setMessage("Login successful!");
        navigate("/dashboard");
        // Redirect user to another page (e.g., profile or dashboard)
     
      }
    } catch (error) {
      setMessage(error.response?.data.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
