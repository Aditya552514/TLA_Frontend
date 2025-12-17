import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutController from "./LayoutController";
import ProtectedRoute from "./ProtectedRoute";

/* ================= PUBLIC PAGES ================= */
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import WorkInProgress from "../pages/WorkInProgress";
import Unauthorized from "../pages/Unauthorized";

/* ================= AUTH PAGES ================= */
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import AdminLogin from "../pages/AdminLogin";

/* ================= DASHBOARDS ================= */
import Student_Dashboard from "../pages/dashboards/StudentDashboard";
import Admin_Dashboard from "../pages/dashboards/AdminDashboard";
import Instructor_Dashboard from "../pages/dashboards/InstructorDashboard";

/* ================= STUDENT COMPONENTS ================= */
import Student_Home from "../components/studentcomponents/Student_Home";
import Student_Courses from "../components/studentcomponents/Student_Courses";
import Student_Exams from "../components/studentcomponents/Student_Exams";
import Student_Results from "../components/studentcomponents/Student_Results";
import Student_Performance from "../components/studentcomponents/Student_Performance";
import Student_Settings from "../components/studentcomponents/Student_Settings";

/* ================= ADMIN COMPONENTS ================= */
import Admin_Action from "../components/admincomponents/Admin_Action";
import Admin_Analytics from "../components/admincomponents/Admin_Analytics";
import Admin_Courses from "../components/admincomponents/Admin_Courses";

import Admin_Users from "../components/admincomponents/Admin_Users";
import Admin_Home from "../components/admincomponents/Admin_Home";
import Admin_Payments from "../components/adminComponents/Admin_Payments";
import Admin_Reports from "../components/adminComponents/Admin_Reports"

//added commented line


import Instructor_Tasks from "../components/instructorComponents/Instructor_Tasks";
import Instructor_Courses from "../components/instructorComponents/Instructor_Courses";
import Instructor_Home from "../components/instructorComponents/Insturctor_Home";
import Instructor_Rating from "../components/instructorComponents/Instructor_Rating"
import CourseDetails from "../components/courses/CourseDetails";
import Admin_createCourses from "../components/adminComponents/Admin_CreateCourse";
import UpdateCourse from "../components/courses/UpdateCourse";
import Admin_updateCourse from "../components/adminComponents/Admin_updateCourse";
import AddLesson from "../components/courses/AddLesson";
// import Admin_updateCourse from "../components/adminComponents/Admin_updateCourse";

const AppRouter = () => {
  return (
    <LayoutController>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
        <Route path="/workingprogress" element={<WorkInProgress />} />

        {/* ========== AUTH ROUTES ========== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* ===== COMMON COURSE VIEW ===== */}
          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute allowedRoles={["admin", "instructor", "student"]}>
                <CourseDetails />
              </ProtectedRoute>
            }
          />

        

        {/* ========== STUDENT DASHBOARD (ROLE: STUDENT) ========== */}
        <Route
          path="/student_dashboard"
          element={
            <ProtectedRoute allowedRoles={["student","admin"]}>
              <Student_Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Student_Home />} />
          <Route path="courses" element={<Student_Courses />} />
          <Route path="exams" element={<Student_Exams />} />
          <Route path="results" element={<Student_Results />} />
          <Route path="performance" element={<Student_Performance />} />
          <Route path="settings" element={<Student_Settings />} />
        </Route>

        {/* ========== ADMIN DASHBOARD (ROLE: ADMIN) ========== */}
        <Route
          path="/admin_dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admin_Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin_Home />} />
          <Route path="action" element={<Admin_Action />} />
          <Route path="analytics" element={<Admin_Analytics />} />
          <Route path="courses" element={<Admin_Courses />} />
          <Route path="create_courses" element={<Admin_createCourses />} />
          <Route path="courses/:courseId/edit" element={<Admin_updateCourse />} />
          <Route path = 'courses/:id/add-lesson' element={<AddLesson/>}/>
          {/* <Route path="courses/:id" element={<CourseDetails/>}/> */}
          <Route path="allusers" element={<Admin_Users />} />
          <Route path="reports" element={<Admin_Reports />} />
          <Route path="payment" element={<Admin_Payments />} />

        </Route>

        {/* ========== INSTRUCTOR DASHBOARD (ROLE: INSTRUCTOR) ========== */}
        <Route
          path="/instructor_dashboard"
          element={
            <ProtectedRoute allowedRoles={["instructor"]}>
              <Instructor_Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Instructor_Home />} />
          <Route path="courses" element={<Instructor_Courses />} />
          <Route path="rating" element={<Instructor_Rating />} />
          <Route path="tasks" element={<Instructor_Tasks />} />
        </Route>

        {/* ========== ERROR ROUTES ========== */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorPage />} />


        {/* <Route path="/admin/courses" element={<AdminCourses />} /> */}



      </Routes>
    </LayoutController>
  );
};

export default AppRouter;