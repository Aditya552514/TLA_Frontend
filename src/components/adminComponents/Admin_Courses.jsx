import React, { useEffect, useState } from "react";
import { Button, Spin, Empty, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { getAllCourses, deleteCourse } from "../../api/api";
import CourseCard from "../courses/CourseCard";

const Admin_Courses = () => {
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

  /* ================= DELETE COURSE ================= */
  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId); // 🔥 API CALL
      message.success("🗑 Course deleted successfully");

      // Remove deleted course from UI
      setCourses((prev) =>
        prev.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      message.error(
        error?.response?.data?.message ||
          "Only admin can delete courses"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            🎓 Courses Management
          </h1>
          <p className="text-gray-500 mt-1">
            Create, manage and monitor all courses
          </p>
        </div>

        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => navigate("/admin_dashboard/create_courses")}
          className="h-12 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 font-semibold"
        >
          Create Course
        </Button>
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
              onDelete={handleDeleteCourse} // ✅ PASS DELETE HANDLER
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin_Courses;
