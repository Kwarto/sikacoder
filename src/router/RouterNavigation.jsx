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
  Network,
  Services,
} from "../pages";

const RouterNavigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Intern />} />
        <Route path="/network" element={<Network />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path='/sc-admin-panel' element={<Admin />} />
      </Routes>
    </>
  );
};

export default RouterNavigation;
