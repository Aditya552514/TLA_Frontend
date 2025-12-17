import React from "react";
import CourseCard from "../components/CourseCard";

const dummyCourses = [
  {
    id: 1,
    title: "React for Beginners",
    image: "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg",
    price: 1999,
   
  },
  {
    id: 2,
    title: "Advanced React & Performance",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    price: 3499,
   
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    price: 1499,
    
  },
  {
    id: 4,
    title: "Node.js & Express API Development",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    price: 2499,
    
  },
  {
    id: 5,
    title: "Full Stack MERN Developer",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    price: 9999,
    
  },
  {
    id: 6,
    title: "Database Design & SQL",
    image: "https://images.pexels.com/photos/3730760/pexels-photo-3730760.jpeg",
    price: 1299,
   
  },
  {
    id: 7,
    title: "Python for Everyone",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    price: 1799,
    
  },
  {
    id: 8,
    title: "Data Structures & Algorithms",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    price: 2999,
    
  },
  {
    id: 9,
    title: "UI/UX Design with Figma",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    price: 1899,
    
  },
  {
    id: 10,
    title: "HTML & CSS Complete Bootcamp",
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
    price: 999,
   
  },
  {
    id: 11,
    title: "DevOps Basics (Docker & CI/CD)",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    price: 3999,
    
  },
  {
    id: 12,
    title: "Cloud Computing with AWS",
    image: "https://images.pexels.com/photos/3730764/pexels-photo-3730764.jpeg",
    price: 4999,
    
  },
];

const Courses = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "26px", marginBottom: "8px" }}>
        Our Popular Courses
      </h1>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        Learn industry-relevant skills with practical, job-oriented courses.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {dummyCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            image={course.image}
            price={course.price}
            enrolled={course.enrolled}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
