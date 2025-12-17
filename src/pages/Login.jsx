import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { loginUserAPI } from "../api/api";
// import { decodeToken } from "../utils/jwt";
import { decodeToken } from "../utils/jwt";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  


  const handleLogin = async () => {
  const { email, password } = form;

  if (!email || !password) {
    return message.error("All fields are required!");
  }

  setLoading(true);

  try {
    const res = await loginUserAPI(form);

    message.success("Login successful!");

    // ✅ Store token
    localStorage.setItem("authToken", res.data.token);

    // ✅ Decode token to get user info
    const user = decodeToken(res.data.token);

    // ✅ STORE USER (THIS WAS MISSING)
    // localStorage.setItem("user", JSON.stringify(user));
    

    // ✅ Role-based navigation
    if (user?.role === "admin") {
      navigate("/admin_dashboard");
    } else if (user?.role === "instructor") {
      navigate("/instructor_dashboard");
    } else if (user?.role === "student") {
      navigate("/student_dashboard");
    } else {
      navigate("/login"); // safety fallback
    }

  } catch (err) {
    message.error(err.response?.data?.message || "Login failed!");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Login to your account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="text-gray-200 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-gray-200 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

       

        {/* Bottom Text */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Don't have an account?{" "}
          <Link to={'/register'}>
            <span className="text-blue-400 hover:underline cursor-pointer">
              Register Now
            </span>
          </Link>
        </p>

        {/* Forgot Password */}
        <p className="text-center text-gray-400 text-sm mt-6">
          <Link to="/forgot-password">
            <span className="text-blue-500 hover:text-blue-400 hover:underline transition cursor-pointer">
              Forgot Password?
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;