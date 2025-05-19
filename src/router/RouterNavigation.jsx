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
} from "../pages";
import { UserProtectedRoute, AdminProtectedRoute } from "../components";
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
        <Route path="/internship" element={
          <UserProtectedRoute>
            <Intern />
          </UserProtectedRoute>
          } />
        <Route path="/network" element={<Network />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/overview" element={
          <UserProtectedRoute>
            <Dashboard />
          </UserProtectedRoute>
          } />
        <Route path='/sc-admin-panel/login' element={<LoginAdmin />} />
        <Route path='/sc-admin-panel' element={
          <AdminProtectedRoute>
            <Admin /> 
          </AdminProtectedRoute>
          } />
       </Routes>
      </AdminAuthProvider>
    </UserAuthProvider>
    </>
  );
};

export default RouterNavigation;
