import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "../Pages/Contact";
import LaningPage from "../Pages/LaningPage";
import Register from "../Pages/Register";
import Dashboard from "./../Pages/Dashboard/index";
import Login from "./../Pages/Login/index";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserContext";
import About from "../Pages/About";
import userEvent from "@testing-library/user-event";

export default function MyRoute() {
  const { getUser, user } = useContext(UserContext)
  useEffect(() => {
    getUser()
  })


  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" element={<LaningPage />} />
      <Route
        path="/login"
        element={user.first_name ? <Navigate replace to="/dashboard" /> : <Login />}
      />

      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/dashboard"
        element={user.first_name ? <Dashboard /> : <Navigate replace to="/Login" />}
      />
    </Routes>
  );
}
