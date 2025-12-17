//update apis
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================================
   🔐 ATTACH TOKEN TO EVERY REQUEST
================================ */
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // MUST match login storage key

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================================
   AUTH APIs
================================ */

// REGISTER
export const registerUserAPI = (data) =>
  API.post("/auth/register", data);

// VERIFY EMAIL
export const verifyUserAPI = (data) =>
  API.post("/auth/verify", data);

// LOGIN
export const loginUserAPI = (data) =>
  API.post("/auth/login", data);

// RESEND OTP
export const resendOtpAPI = (data) =>
  API.post("/auth/resendOtp", data);

// FORGET PASSWORD
export const forgetPasswordAPI = (data) =>
  API.post("/auth/forgetPassword", data);

// RESET PASSWORD
export const resetPasswordAPI = (data) =>
  API.post("/auth/resetPassword", data);

/* ================================
   COURSES APIs (PROTECTED)
   Backend Route: /api/v1/courses
================================ */

// GET ALL COURSES
export const getAllCourses = () =>
  API.get("/courses");

// GET COURSE BY ID
export const getCourseById = (id) =>
  API.get(`/courses/${id}`);

// CREATE COURSE (Admin / Instructor)
export const createCourse = (data) =>
  API.post("/courses", data);

// UPDATE COURSE
export const updateCourse = (id, data) =>
  API.put(`/courses/${id}`, data);

// DELETE COURSE
export const deleteCourse = (id) =>
  API.delete(`/courses/${id}`);

// ADD LESSON TO COURSE
export const addLesson = (courseId, data) =>
  API.post(`/courses/${courseId}/lessons`, data);

//get all courses
export const getAllCoursesLessons = (courseId) =>
  API.post(`/courses/${courseId}/lessons`);

// ENROLL STUDENT
export const enrollStudent = (courseId) =>
  API.post(`/courses/${courseId}/enroll`);

export default API;