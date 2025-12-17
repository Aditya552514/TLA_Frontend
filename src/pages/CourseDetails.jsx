import React from "react";
import { useParams, Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    image:
      "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1999,
    enrolled: 120,
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Learn the fundamentals of React, components, props, state, and basic hooks to build interactive UIs.",
  },
  {
    id: 2,
    title: "Full Stack with Node.js",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 2499,
    enrolled: 85,
    duration: "10 weeks",
    level: "Intermediate",
    description:
      "Build full-stack applications with Node.js, Express, and databases. Learn APIs, auth, and deployment.",
  },
  {
    id: 3,
    title: "Database Design & SQL",
    image:
      "https://images.pexels.com/photos/3730760/pexels-photo-3730760.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1499,
    enrolled: 60,
    duration: "4 weeks",
    level: "Beginner",
    description:
      "Understand relational databases, normalization, and write SQL queries for real-world use cases.",
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const courseId = Number(id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div style={{ padding: "24px" }}>
        <h2>Course not found</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={course.image}
        alt={course.title}
        style={{
          width: "100%",
          maxHeight: "320px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />

      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>{course.title}</h1>

      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        <strong>Price:</strong> ₹{course.price}
      </p>
      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        <strong>Enrolled:</strong> {course.enrolled} students
      </p>
      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        <strong>Level:</strong> {course.level}
      </p>

      <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: "1.6" }}>
        {course.description}
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Link
          to={`/courses/${course.id}/enroll`}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Enroll Now
        </Link>

        <Link
          to="/courses"
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            border: "1px solid #1f2937",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
