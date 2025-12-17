import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, message, Button, Input } from "antd";
import { registerUserAPI, verifyUserAPI, resendOtpAPI } from "../api/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"student",
  });

  const [loading, setLoading] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ------------------------------------
  // REGISTER HANDLER
  // ------------------------------------
  const handleRegister = async () => {
    const { username, fullname, email, password, confirmPassword } = form;

    if (!username || !fullname || !email || !password || !confirmPassword) {
      return message.error("All fields are required!");
    }

    if (password !== confirmPassword) {
      return message.error("Passwords do not match!");
    }

    setLoading(true);

    try {
      await registerUserAPI(form);

      message.success("Registration successful! Check OTP in console.");

      setEmailValue(email);
      setVerifyModal(true);
    } catch (error) {
      console.error("REGISTER ERROR:", error.response?.data);
      message.error(error.response?.data?.message || "Registration failed!");
    }

    setLoading(false);
  };

  // ------------------------------------
  // VERIFY OTP HANDLER
  // ------------------------------------
  const handleVerifyOtp = async () => {
    if (!otp) {
      return message.error("Enter OTP!");
    }

    setOtpLoading(true);
    try {
      await verifyUserAPI({ email: emailValue, otp });
      message.success("Email verified successfully!");
      setVerifyModal(false);

      // Redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (error) {
      message.error(error.response?.data?.message || "Invalid or expired OTP!");
    }
    setOtpLoading(false);
  };

  // ------------------------------------
  // RESEND OTP
  // ------------------------------------
  const handleResendOtp = async () => {
    try {
      await resendOtpAPI({ email: emailValue });
      message.success("OTP resent successfully!");
    } catch {
      message.error("Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/10">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Create Account ✨
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Join us and explore amazing features
        </p>

        {/* USERNAME */}
        <div className="mb-5">
          <label className="text-gray-200 font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Choose a unique username"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-purple-400 transition"
          />
        </div>

        {/* FULL NAME */}
        <div className="mb-5">
          <label className="text-gray-200 font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-purple-400 transition"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-gray-200 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-purple-400 transition"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-5">
          <label className="text-gray-200 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-purple-400 transition"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-6">
          <label className="text-gray-200 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-purple-400 transition"
          />
        </div>

        {/* REGISTER BUTTON */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-500"></div>
          <span className="mx-2 text-gray-300">or</span>
          <div className="grow border-t border-gray-500"></div>
        </div>

        {/* GOOGLE SIGNUP */}
        <button className="w-full bg-white text-black py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-6 h-6"
          />
          Sign Up with Google
        </button>

        {/* LOGIN TEXT */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-purple-400 hover:underline cursor-pointer">
              Login Here
            </span>
          </Link>
        </p>
      </div>

      {/* ------------------------ */}
      {/* VERIFY EMAIL MODAL */}
      {/* ------------------------ */}
      <Modal
        open={verifyModal}
        footer={null}
        onCancel={() => setVerifyModal(false)}
        centered
      >
        <h2 className="text-xl font-bold text-center mb-3">Verify Your Email</h2>
        <p className="text-center mb-4">Enter the OTP sent to:</p>

        <div className="p-3 text-center bg-blue-50 rounded-lg border mb-4">
          <strong>{emailValue}</strong>
        </div>

        {/* OTP INPUT */}
        <Input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          className="mb-4 text-center py-2"
        />

        {/* VERIFY BUTTON */}
        <Button
          type="primary"
          block
          loading={otpLoading}
          onClick={handleVerifyOtp}
          className="mb-2"
        >
          Verify OTP
        </Button>

        {/* RESEND OTP BUTTON */}
        <Button block onClick={handleResendOtp}>
          Resend OTP
        </Button>
      </Modal>
    </div>
  );
};

export default Register;