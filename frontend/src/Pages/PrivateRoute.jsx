import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("accessToken"); // Check if token is stored in localStorage

  if (!token) {
    // If no token is found, redirect to login page
    return <Navigate to="/login" />;
  }

  // If token is present, render the child components (Dashboard)
  return <Outlet />;
};

export default PrivateRoute;
