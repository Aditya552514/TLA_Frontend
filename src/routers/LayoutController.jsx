// src/router/LayoutController.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";


const LayoutController = ({ children }) => {
  const location = useLocation();

  // Pages where Nav + Footer MUST NOT appear
  const hiddenLayoutPages = [
    "/login",
    "/register",
    "/reset-password",
    "/error",
    "/admin-login",
    "/reset-password",
    "/forgot-password",
    "/student_dashboard",
    '/student_dashboard/exams',
    '/student_dashboard/courses',
    '/student_dashboard/performance',
    '/student_dashboard/settings',
    '/student_dashboard/results',
    '/admin_dashboard',
    '/admin_dashboard/action',
    '/admin_dashboard/analytics',
    '/admin_dashboard/courses',
    '/admin_dashboard/create_courses',
    '/admin_dashboard/allusers',
    '/instructor_dashboard',
    '/instructor_dashboard/courses',
    '/instructor_dashboard/tasks',
    '/instructor_dashboard/rating',
    '/unauthorized'
    
  ];

  // const hideLayout = hiddenLayoutPages.includes(location.pathname);
const hideLayout = hiddenLayoutPages.includes(location.pathname) || location.pathname.startsWith("/admin_dashboard/courses/");
  return (
    <>
      {!hideLayout && <NavBar />}

      <main className="min-h-screen">{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default LayoutController;