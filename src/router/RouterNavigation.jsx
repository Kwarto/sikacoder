import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Admin,
  Auth,
  Blog,
  Contact,
  Dashboard,
  Home,
  Intern,
  LoginAdmin,
  Network,
  Services,
  StatusBoard,
} from "../pages";
import { UserProtectedRoute, AdminProtectedRoute, Enroll } from "../components";
import { UserAuthProvider } from "../context/UserAuthContext";
import { AdminAuthProvider } from "../context/AdminAuthContext";
const RouterNavigation = () => {
  return (
    <>
      <UserAuthProvider>
        <AdminAuthProvider>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/internship"
              element={
                <UserProtectedRoute>
                  <Intern />
                </UserProtectedRoute>
              }
            />
            <Route path={`/internship/:id/enroll`} element={<Enroll />} />
            <Route
              path="/internship/application/:id/status"
              element={
                <UserProtectedRoute>
                  <StatusBoard />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/network"
              element={
                // <UserProtectedRoute>
                  <Network />
                // </UserProtectedRoute>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/blog"
              element={
                // <UserProtectedRoute>
                  <Blog />
                // </UserProtectedRoute>
              }
            />
            <Route
              path="/overview"
              element={
                <UserProtectedRoute>
                  <Dashboard />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/sc-admin-panel"
              element={
                <AdminProtectedRoute>
                  <Admin />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </AdminAuthProvider>
      </UserAuthProvider>
    </>
  );
};

export default RouterNavigation;
