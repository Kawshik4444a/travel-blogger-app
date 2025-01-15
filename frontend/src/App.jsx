import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Post from './Pages/Post'
import PrivateRoute from "./Pages/PrivateRoute";
import AllPosts from './Pages/AllPosts'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
function App() {


  return (
    <>
     <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/add-post" element={<Post />} />
          <Route path="/all-Posts" element={<AllPosts />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile/>} />

      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
