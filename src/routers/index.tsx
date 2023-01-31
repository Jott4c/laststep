import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "../pages/Contact";
import LaningPage from "../pages/LaningPage";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserContext";
import About from "../pages/About";
import userEvent from "@testing-library/user-event";

export default function MyRoute() {
  const { user } = useContext(UserContext)

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
