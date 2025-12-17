// import React, { useEffect, useState } from "react";
// import { Card, Spin, Tag, Empty } from "antd";
// import { useParams } from "react-router-dom";
// import { getSingleCourse } from "../../api/api";

// const Student_CourseDetails = () => {
//   const { id } = useParams(); // 👈 course id from URL
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await getSingleCourse(id);
//         setCourse(res?.data?.course || null);
//       } catch (error) {
//         console.error("Fetch course error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchCourse();
//   }, [id]);

//   /* ---------- UI STATES ---------- */

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (!course) {
//     return <Empty description="Course not found" />;
//   }

//   /* ---------- RENDER ---------- */

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <Card className="rounded-2xl border border-gray-200">
//         {/* Image */}
//         <img
//           src={course.courseImageUrl}
//           alt={course.title}
//           className="w-full h-64 object-cover rounded-xl mb-6"
//         />

//         {/* Title */}
//         <h1 className="text-2xl font-bold text-gray-800">
//           {course.title}
//         </h1>

//         {/* Category & Level */}
//         <div className="flex gap-3 mt-3">
//           <Tag color="purple">{course.category}</Tag>
//           <Tag color="blue">{course.level}</Tag>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 mt-4">
//           {course.description}
//         </p>

//         {/* Price */}
//         <p className="mt-4 font-semibold text-lg">
//           {course.price === 0 ? "Free Course" : `₹${course.price}`}
//         </p>
//       </Card>
//     </div>
//   );
// };

// export default Student_CourseDetails;


// import React, { useState } from "react";
// import { Button, message } from "antd";
// import { useNavigate } from "react-router-dom";
// import CourseCard from "../courses/CourseCard";
// import { enrollStudent } from "../../api/api";

// const Student_CourseCard = ({ course }) => {
//   const navigate = useNavigate();
//   const [enrolling, setEnrolling] = useState(false);

//   if (!course) return null;

//   const handleEnroll = async () => {
//     try {
//       setEnrolling(true);
//       await enrollStudent(course._id);
//       message.success("🎉 Enrolled successfully!");
//       navigate(`/student_dashboard/course/${course._id}`);
//     } catch (error) {
//       message.error(
//         error?.response?.data?.message || "Enrollment failed"
//       );
//     } finally {
//       setEnrolling(false);
//     }
//   };

//   const handleView = () => {
//     navigate(`/student_dashboard/course/${course._id}`);
//   };

//   return (
//     <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
//       {/* Course content */}
//       <CourseCard course={course} />

//       {/* Student actions */}
//       <div className="flex gap-3 px-4 pb-4">
//         <Button
//           type="default"
//           block
//           onClick={handleView}
//           className="rounded-lg"
//         >
//           View
//         </Button>

//         <Button
//           type="primary"
//           block
//           loading={enrolling}
//           onClick={handleEnroll}
//           className="rounded-lg bg-indigo-600 hover:bg-indigo-700"
//         >
//           Enroll
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Student_CourseCard;


import React, { useEffect, useState } from "react";
import { Card, Spin, Tag, Empty } from "antd";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../api/api";

const Student_CourseDetails = () => {
  const { id } = useParams(); // 👈 from /student_dashboard/course/:id
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error("Course ID missing from URL");
      setLoading(false);
      return;
    }

    const fetchCourseDetails = async () => {
      try {
        console.log("Fetching course ID:", id);

        const res = await getCourseById(id);
        console.log("Course response:", res.data);

        setCourse(res?.data?.course ?? null);
      } catch (error) {
        console.error("Fetch course error:", error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  /* ---------- UI STATES ---------- */

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spin size="large" />
      </div>
    );
  }

  if (!course) {
    return <Empty description="Course not found" />;
  }

  /* ---------- UI ---------- */

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="rounded-xl border border-gray-200">
        {/* Image (safe) */}
        {course.courseImageUrl && (
          <img
            src={course.courseImageUrl}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-2xl font-bold text-gray-800">
          {course.title}
        </h1>

        <div className="flex gap-3 mt-3">
          <Tag color="purple">{course.category}</Tag>
          <Tag color="blue">{course.level}</Tag>
        </div>

        <p className="text-gray-600 mt-4">
          {course.description}
        </p>

        <p className="mt-4 font-semibold text-lg">
          {course.price === 0 ? "Free Course" : `₹${course.price}`}
        </p>
      </Card>
    </div>
  );
};

export default Student_CourseDetails;
