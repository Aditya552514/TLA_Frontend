import React from "react";
import { useNavigate } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full animate__animated animate__fadeInUp border border-gray-200">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-inner animate-bounce">
            <WarningOutlined style={{ fontSize: "48px" }} />
          </div>
        </div>

        {/* 404 BIG TEXT */}
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4 tracking-wider drop-shadow-lg">
          404
        </h1>

        {/* Small Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-8">
          The page you're looking for might have been removed,  
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Go Back Home
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;