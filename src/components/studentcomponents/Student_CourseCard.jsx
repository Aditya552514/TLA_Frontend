// import React from "react";
// import { Button, message } from "antd";
// import { useNavigate } from "react-router-dom";
// import CourseCard from "../courses/CourseCard";
// import { enrollStudent } from "../../api/api";

// const Student_CourseCard = ({ course }) => {
//   const navigate = useNavigate();

//   const handleEnroll = async () => {
//     try {
//       await enrollStudent(course._id);
//       message.success("🎉 Enrolled successfully!");
//       navigate(`/courses/${course._id}`);
//     } catch (error) {
//       message.error(
//         error?.response?.data?.message || "Enrollment failed"
//       );
//     }
//   };

//   return (
//     <div className="rounded-2xl shadow-md bg-white overflow-hidden transition hover:shadow-xl">
//       {/* Course Card Content */}
//       <CourseCard course={course} />

//       {/* Divider */}
//       <div className="px-4 pb-4">
//         <Button
//           type="primary"
//           size="large"
//           block
//           onClick={handleEnroll}
//           className="rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold"
//         >
//           Enroll Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Student_CourseCard;

import React, { useState } from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import CourseCard from "../courses/CourseCard";
import { enrollStudent } from "../../api/api";

const Student_CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const [enrolling, setEnrolling] = useState(false);

  const handleEnroll = async () => {
    if (!course?._id) {
      message.error("Invalid course");
      return;
    }

    try {
      setEnrolling(true);
      await enrollStudent(course._id);

      message.success("🎉 Enrolled successfully!");
      navigate(`/courses/${course._id}`); // go to course details / lessons
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Enrollment failed"
      );
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Course Content (NO edit / delete here) */}
      <CourseCard course={course} />

      {/* Action Section */}
      <div className="px-4 pb-4">
        <Button
          type="primary"
          size="large"
          block
          loading={enrolling}
          disabled={enrolling}
          onClick={handleEnroll}
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold"
        >
          {enrolling ? "Enrolling..." : "Enroll Now"}
        </Button>
      </div>
    </div>
  );
};

export default Student_CourseCard;
