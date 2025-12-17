// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import {
  forgetPasswordAPI,
  resetPasswordAPI,
  resendOtpAPI,
} from "../api/api";

export default function ForgotPassword() {
  const navigate = useNavigate();

  // Step 1: Email
  const [email, setEmail] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);

  // Step 2 UI Toggle
  const [showResetUI, setShowResetUI] = useState(false);

  // Reset password fields
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetting, setResetting] = useState(false);

  // Resend OTP
  const [resending, setResending] = useState(false);

  // Request OTP
  const handleSendOtp = async () => {
    if (!email) return message.error("Please enter your email");

    setSendingOtp(true);
    try {
      await forgetPasswordAPI({ email });
      message.success("OTP generated successfully! (Check server console)");
      setShowResetUI(true); 
    } catch (err) {
      message.error(err.response?.data?.message || "Error sending OTP");
    }
    setSendingOtp(false);
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setResending(true);
    try {
      await resendOtpAPI({ email });
      message.success("OTP resent successfully! (Check console)");
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to resend OTP");
    }
    setResending(false);
  };

  // Reset Password
  const handleResetPassword = async () => {
    if (!otp) return message.error("Enter OTP");
    if (!newPassword || !confirmPassword)
      return message.error("Enter passwords");
    if (newPassword !== confirmPassword)
      return message.error("Passwords do not match");
    if (newPassword.length < 6)
      return message.error("Password must be at least 6 characters");

    setResetting(true);
    try {
      await resetPasswordAPI({ email, otp, newPassword });
      message.success("Password reset successfully");
      navigate("/login");
    } catch (err) {
      message.error(err.response?.data?.message || "Reset failed");
    }
    setResetting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/10">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          Forgot Password
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Enter your email to receive an OTP.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-gray-200 font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your registered email"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
          />
        </div>

        {/* Send OTP */}
        <button
          onClick={handleSendOtp}
          disabled={sendingOtp}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
        >
          {sendingOtp ? "Sending OTP..." : "Send OTP"}
        </button>

        {/* Reset Password UI */}
        {showResetUI && (
          <div className="mt-10 animate-fadeIn">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Enter OTP & Reset Password
            </h3>

            {/* OTP */}
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value.trim())}
              placeholder="OTP (6 digits)"
              className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
              maxLength={6}
            />

            {/* New Password */}
            <input
              value={newPassword}
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
            />

            {/* Confirm Password */}
            <input
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full mb-5 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400 transition"
            />

            {/* Reset Button */}
            <button
              onClick={handleResetPassword}
              disabled={resetting}
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              {resetting ? "Resetting..." : "Reset Password"}
            </button>

            {/* Resend OTP */}
            <button
              onClick={handleResendOtp}
              disabled={resending}
              className="mt-3 w-full bg-gray-700 hover:bg-gray-800 transition text-white py-2 rounded-lg"
            >
              {resending ? "Resending..." : "Resend OTP"}
            </button>
          </div>
        )}

        {/* Back to Login */}
        <div className="text-center text-gray-300 mt-6">
          <Link to="/login" className="text-blue-400 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}