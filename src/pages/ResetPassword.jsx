// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd";
import { resetPasswordAPI } from "../api/api";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const { email, otp, newPassword, confirmPassword } = form;
    if (!email || !otp || !newPassword || !confirmPassword) return message.error("All fields are required");
    if (newPassword !== confirmPassword) return message.error("Passwords do not match");
    if (newPassword.length < 6) return message.error("Password must be at least 6 characters");

    setLoading(true);
    try {
      await resetPasswordAPI({ email, otp, newPassword });
      message.success("Password reset successful — please login");
      navigate("/login");
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Reset Password</h2>
        <p className="text-gray-300 text-center mb-6">Enter the OTP & new password to reset.</p>

        <div className="mb-3">
          <label className="text-gray-200 font-medium">Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition" />
        </div>

        <div className="mb-3">
          <label className="text-gray-200 font-medium">OTP</label>
          <input name="otp" value={form.otp} onChange={handleChange} placeholder="Enter OTP" className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition" />
        </div>

        <div className="mb-3">
          <label className="text-gray-200 font-medium">New Password</label>
          <input name="newPassword" value={form.newPassword} onChange={handleChange} type="password" placeholder="New password" className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition" />
        </div>

        <div className="mb-6">
          <label className="text-gray-200 font-medium">Confirm Password</label>
          <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm password" className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition" />
        </div>

        <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-lg">
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <div className="text-center text-gray-300 mt-4">
          <Link to="/login" className="text-blue-400 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}