// import React, { useEffect, useState } from "react";
// import { Card, Spin, Empty, message } from "antd";
// import { useParams } from "react-router-dom";
// // import { getAllCourseLessons } from "../../api/api";
// import { getAllCoursesLessons } from "../../api/api";

// const GetLessons = () => {
//   const params = useParams();

//   // ✅ works for both :id and :courseId
//   const courseId = params.id || params.courseId;

//   const [lessons, setLessons] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLessons = async () => {
//       if (!courseId) {
//         message.error("Invalid course ID");
//         setLoading(false); // ✅ VERY IMPORTANT
//         return;
//       }

//       try {
//         const res = await getAllCoursesLessons(courseId);
//         setLessons(res.data?.lessons || []);
//       } catch {
//         message.error("Failed to fetch lessons");
//         setLessons([]);
//       } finally {
//         setLoading(false); // ✅ always stops spinner
//       }
//     };

//     fetchLessons();
//   }, [courseId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (!lessons.length) {
//     return <Empty description="No lessons available" />;
//   }

//   return (
//     <div className="space-y-4">
//       {lessons.map((lesson, index) => (
//         <Card
//           key={lesson._id}
//           className="rounded-2xl shadow-md"
//           title={`Lesson ${index + 1}: ${lesson.title}`}
//         >
//           <p className="text-gray-600">{lesson.content}</p>
//           {lesson.duration && (
//             <p className="text-sm text-gray-400 mt-2">
//               ⏱ Duration: {lesson.duration} mins
//             </p>
//           )}
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default GetLessons;


import React, { useEffect, useState } from "react";
import { Card, Spin, Empty, message } from "antd";
import { useParams } from "react-router-dom";
import { getAllCoursesLessons } from "../../api/api";

const GetLessons = () => {
  const { id, courseId: paramCourseId } = useParams();
  const courseId = id || paramCourseId;

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!courseId) {
        message.error("Invalid course ID");
        setLoading(false);
        return;
      }

      try {
        const res = await getAllCoursesLessons(courseId);

        console.log("Lessons API response:res", res);

        // ✅ handle backend response safely
        const lessonData = res?.data?.course?.lessons ?? [];
        setLessons(Array.isArray(lessonData) ? lessonData : []);
      } catch (error) {
        console.error("Fetch lessons error:", error);
        message.error("Failed to fetch lessons");
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId]);

  /* ------------------ UI STATES ------------------ */

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spin size="large" />
      </div>
    );
  }

  if (!lessons.length) {
    return (
      <Empty
        description="No lessons available for this course"
        className="py-10"
      />
    );
  }

  /* ------------------ RENDER ------------------ */

  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => (
        <Card
          key={lesson?._id || index}
          title={`Lesson ${index + 1}: ${lesson?.title || "Untitled Lesson"}`}
          className="rounded-2xl shadow-md"
        >
          <p className="text-gray-600">
            {lesson?.content || "No content available"}
          </p>

          {lesson?.duration && (
            <p className="text-sm text-gray-400 mt-2">
              ⏱ Duration: {lesson.duration} mins
            </p>
          )}
        </Card>
      ))}
    </div>
  );
};

export default GetLessons;
