import React, { useEffect, useState } from "react";
import axios from "axios";

/* ================= DUMMY USERS (Fallback) ================= */
const DUMMY_USERS = [
  {
    _id: "u1",
    fullname: "Ravi Kumar",
    email: "ravi.kumar@lms.com",
    role: "admin",
    userType: "Admin",
  },
  {
    _id: "u2",
    fullname: "Ananya Sharma",
    email: "ananya.sharma@lms.com",
    role: "instructor",
    userType: "Instructor",
  },
  {
    _id: "u3",
    fullname: "Suresh Reddy",
    email: "suresh.reddy@lms.com",
    role: "student",
    userType: "Student",
  },
  {
    _id: "u4",
    fullname: "Priya Verma",
    email: "priya.verma@lms.com",
    role: "student",
    userType: "Student",
  },
  {
    _id: "u5",
    fullname: "Amit Patel",
    email: "amit.patel@lms.com",
    role: "instructor",
    userType: "Instructor",
  },
];

export default function Admin_Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ================= FETCH USERS FROM COURSES ================= */
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/courses",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const courses = res.data?.courses || [];
      const userMap = new Map();

      courses.forEach((course) => {
        /* Instructor */
        if (course.createdBy) {
          userMap.set(course.createdBy.email, {
            _id: course.createdBy._id,
            fullname: course.createdBy.fullname,
            email: course.createdBy.email,
            role: course.createdBy.role,
            userType: "Instructor",
          });
        }

        /* Students */
        course.enrolledStudents?.forEach((student) => {
          userMap.set(student.email, {
            _id: student._id,
            fullname: student.fullname,
            email: student.email,
            role: "student",
            userType: "Student",
          });
        });
      });

      // If API returns no users → use dummy
      setUsers(userMap.size ? [...userMap.values()] : DUMMY_USERS);
    } catch  {
      console.warn("API failed, using dummy users");
      setUsers(DUMMY_USERS);
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOADING STATE ================= */
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-gray-500 text-lg">Loading users...</span>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Users Management
          </h2>
          <p className="text-sm text-gray-500">
            Admin, instructors and students across all courses
          </p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600">
          Demo Data Enabled
        </span>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Role
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                User Type
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr
                key={user.email}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.fullname}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : user.role === "instructor"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {user.userType}
                </td>

                <td className="px-6 py-4">
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}
