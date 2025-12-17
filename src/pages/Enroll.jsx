import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const Enroll = () => {
  const { id } = useParams();
  const location = useLocation();
  const course = location.state?.course;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your backend API
    console.log("Enrollment submitted:", { courseId: id, course, ...form });
    alert("Enrollment submitted successfully! (dummy)");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            Enroll in course
          </h1>
          <Link
            to="/courses"
            className="text-xs text-blue-600 hover:underline"
          >
            ← Back to courses
          </Link>
        </div>

        {/* Course summary */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-1">
          <p className="text-sm text-gray-500">Course</p>
          <p className="font-medium text-gray-900">
            {course?.title || "Course ID: " + id}
          </p>
          {course && (
            <>
              <p className="text-xs text-gray-500">
                {course.level} • {course.duration}
              </p>
              <p className="text-sm font-semibold text-emerald-600 mt-1">
                ₹{course.price.toLocaleString("en-IN")}
              </p>
            </>
          )}
        </div>

        {/* Enrollment form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes (optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Any questions or special requests?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-blue-700 transition"
          >
            Confirm enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
