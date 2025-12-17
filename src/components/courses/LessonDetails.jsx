// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, Spin } from "antd";
// import { getCourseById } from "../../api/api";

// const LessonDetails = () => {
//   const { courseId, lessonId } = useParams();
//   const [lesson, setLesson] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLesson = async () => {
//       try {
//         const res = await getCourseById(courseId);
//         const foundLesson = res.data.course.lessons.find(
//           (l) => l._id === lesson.id
//         );
//         setLesson(foundLesson);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLesson();
//   }, [courseId, lessonId]);

//   if (loading) return <Spin size="large" />;
//   if (!lesson) return <p>Lesson not found</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <Card className="rounded-2xl shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">
//           {lesson.title}
//         </h1>

//         <p className="text-gray-700 whitespace-pre-line">
//           {lesson.content}
//         </p>
//       </Card>
//     </div>
//   );
// };

// export default LessonDetails;


import React from 'react'
import WorkInProgress from '../../pages/WorkInProgress'

const LessonDetails = () => {
  return (
    <div><WorkInProgress/></div>
  )
}

export default LessonDetails