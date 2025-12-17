

// export default student_Home
import React from "react";
import {
  UserOutlined,
  BookOutlined,
  CalendarOutlined,
  PieChartOutlined,
  BellOutlined,
} from "@ant-design/icons";

const student_Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold">Welcome Back, Student 👋</h1>
        <p className="text-lg mt-1 opacity-90">Here is your academic overview today.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Attendance</h3>
            <CalendarOutlined className="text-blue-500 text-3xl" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-800">92%</p>
          <p className="text-sm text-gray-500">This Month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Exams</h3>
            <BookOutlined className="text-green-500 text-3xl" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-800">4</p>
          <p className="text-sm text-gray-500">Upcoming</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Results</h3>
            <PieChartOutlined className="text-orange-500 text-3xl" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-800">A+</p>
          <p className="text-sm text-gray-500">Last Semester</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Profile</h3>
            <UserOutlined className="text-red-500 text-3xl" />
          </div>
          <p className="mt-4 text-xl font-bold text-gray-800">View Details</p>
          <p className="text-sm text-gray-500">Update Info</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold">View Attendance</h3>
          <p className="text-gray-600 mt-2">Check daily and monthly attendance</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer border-l-4 border-green-500">
          <h3 className="text-lg font-semibold">Upcoming Exams</h3>
          <p className="text-gray-600 mt-2">Plan your exam schedule smarter</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold">Download Results</h3>
          <p className="text-gray-600 mt-2">Access your previous results</p>
        </div>
      </div>

      {/* Notifications */}
      <h2 className="text-xl font-bold mb-4">Recent Notifications</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-start gap-4 border-b pb-4 mb-4">
          <BellOutlined className="text-indigo-600 text-2xl" />
          <div>
            <h4 className="font-semibold">New Assignment Posted</h4>
            <p className="text-gray-600">Your Math assignment is due next Monday.</p>
            <small className="text-gray-400">2 hours ago</small>
          </div>
        </div>

        <div className="flex items-start gap-4 border-b pb-4 mb-4">
          <BellOutlined className="text-orange-600 text-2xl" />
          <div>
            <h4 className="font-semibold">Exam Timetable Updated</h4>
            <p className="text-gray-600">Check the updated December exam schedule.</p>
            <small className="text-gray-400">1 day ago</small>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <BellOutlined className="text-green-600 text-2xl" />
          <div>
            <h4 className="font-semibold">Holiday Notification</h4>
            <p className="text-gray-600">College will remain closed on Friday.</p>
            <small className="text-gray-400">3 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default student_Home;