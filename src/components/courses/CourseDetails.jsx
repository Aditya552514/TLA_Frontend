

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Spin, Tag, Button } from "antd";
// import { getCourseById } from "../../api/api";
// import { decodeToken } from "../../utils/jwt";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔐 role detection
//   const token = localStorage.getItem("authToken");
//   const user = token ? decodeToken(token) : null;
//   const role = user?.role;

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await getCourseById(id);
//         setCourse(res.data.course);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   // if (loading) return <Spin size="large" />;
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <Spin size="large" tip="Loading course..." />
//       </div>
//     );
//   }

//   if (!course) return <p>Course not found</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <img
//         src={course.courseImageUrl}
//         alt={course.title}
//         className="rounded-xl w-full h-64 object-cover"
//       />

//       <h1 className="text-3xl font-bold mt-4">{course.title}</h1>

//       <div className="flex gap-2 mt-2">
//         <Tag color="purple">{course.category}</Tag>
//         <Tag color="blue">{course.level}</Tag>
//       </div>

//       <p className="mt-4 text-gray-600">{course.description}</p>

//       <p className="mt-4 text-xl font-semibold">
//         Price: {course.price === 0 ? "Free" : `₹${course.price}`}
//       </p>

//       {/* ✅ ADD LESSON (ADMIN / INSTRUCTOR ONLY) */}
//       {(role === "admin" || role === "instructor") && (
//         <Button
//           type="primary"
//           className="mt-6"
//           onClick={() =>
//             navigate(`/admin_dashboard/courses/${id}/add-lesson`)
//           }
//         >
//           Add Lesson
//         </Button>
//       )}
//     </div>
//   );
// };

// export default CourseDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Spin, Tag, Button, message } from "antd";
// import { getCourseById } from "../../api/api";
// import { decodeToken } from "../../utils/jwt";
// import GetLessons from "./GetLessons";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [enrolled, setEnrolled] = useState(false); // ✅ NEW STATE

//   // 🔐 role detection
//   const token = localStorage.getItem("authToken");
//   const user = token ? decodeToken(token) : null;
//   const role = user?.role;

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await getCourseById(id);
//         setCourse(res.data.course);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   /* ✅ FULL PAGE SPINNER */
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <Spin size="large" tip="Loading course..." />
//       </div>
//     );
//   }

//   if (!course) return <p>Course not found</p>;

//   /* ✅ ENROLL HANDLER */
//   const handleEnroll = () => {
//     message.success("🎉 Enrolled successfully");
//     setEnrolled(true);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <img
//         src={course.courseImageUrl}
//         alt={course.title}
//         className="rounded-xl w-full h-64 object-cover"
//       />

//       <h1 className="text-3xl font-bold mt-4">{course.title}</h1>

//       <div className="flex gap-2 mt-2">
//         <Tag color="purple">{course.category}</Tag>
//         <Tag color="blue">{course.level}</Tag>
//       </div>

//       <p className="mt-4 text-gray-600">{course.description}</p>

//       <p className="mt-4 text-xl font-semibold">
//         Price: {course.price === 0 ? "Free" : `₹${course.price}`}
//       </p>

//       {/* ✅ STUDENT ENROLL BUTTON */}
//       {role === "student" && (
//         <Button
//           type="primary"
//           className="mt-6"
//           disabled={enrolled}
//           onClick={handleEnroll}
//           style={{
//             cursor: enrolled ? "not-allowed" : "pointer",
//           }}
//         >
//           {enrolled ? "Enrolled" : "Enroll"}
//         </Button>
//       )}

//       {/* ✅ ADD LESSON (ADMIN / INSTRUCTOR ONLY) */}
//       {(role === "admin" || role === "instructor") && (
//         <Button
//           type="primary"
//           className="mt-6"
//           onClick={() =>
//             navigate(`/admin_dashboard/courses/${id}/add-lesson`)
//           }
//         >
//           Add Lesson
//         </Button>
//       )}
//       <GetLessons />
//     </div>
//   );
// };

// export default CourseDetails;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin, Tag, Button } from "antd";
import {   Dropdown, Menu } from "antd";

import { getCourseById } from "../../api/api";
import { decodeToken } from "../../utils/jwt";
import GetLessons from "./GetLessons";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 get logged-in user role
  const token = localStorage.getItem("authToken");
  const user = token ? decodeToken(token) : null;
  const role = user?.role;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await getCourseById(courseId);
        setCourse(res.data.course);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <Spin size="large" />;

  if (!course) return <p>Course not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={course.courseImageUrl}
        alt={course.title}
        className="rounded-xl w-full h-64 object-cover"
      />

      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>

      <div className="flex gap-2 mt-2">
        <Tag color="purple">{course.category}</Tag>
        <Tag color="blue">{course.level}</Tag>
      </div>

      <p className="mt-4 text-gray-600">{course.description}</p>

      <p className="mt-4 text-xl font-semibold">
        Price: {course.price === 0 ? "Free" : `₹${course.price}`}
      </p>

      {/* ✅ ADD LESSON BUTTON */}
      {(role === "admin" || role === "instructor") && (
        <Button
          type="primary"
          className="mt-6"
          onClick={() => navigate(`/admin_dashboard/courses/${courseId}/add-lesson`)}
        >
          Add Lesson
        </Button>
      )}

      <GetLessons/>
    </div>
  );
};

export default CourseDetails;