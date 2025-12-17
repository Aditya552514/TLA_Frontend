import React, { useEffect, useState } from "react";
import { Spin, Empty, message } from "antd";
import { useNavigate } from "react-router-dom";

import { getAllCourses } from "../../api/api";
import CourseCard from "../courses/CourseCard";

const Student_Courses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH COURSES ================= */
  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data.courses || res.data);
    } catch {
      message.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🎓 Courses
        </h1>
        <p className="text-gray-500 mt-1">
          Browse available courses
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : courses.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <Empty description="No courses found" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Student_Courses;
