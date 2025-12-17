import React from "react";
import { Camera } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-3xl">

        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-purple-700 transition">
              <Camera className="text-white" size={18} />
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-white mt-4">John Doe</h2>
          <p className="text-gray-300">john.doe@example.com</p>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-600 my-8"></div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-gray-300 font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/10 outline-none focus:border-purple-400 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/10 outline-none focus:border-purple-400 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/10 outline-none focus:border-purple-400 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/10 outline-none focus:border-purple-400 transition"
            />
          </div>
        </div>

        {/* Save Button */}
        <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg shadow-lg">
          Save Changes
        </button>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div className="p-4 bg-white/10 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white">12</h3>
            <p className="text-gray-300">Courses</p>
          </div>

          <div className="p-4 bg-white/10 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white">5</h3>
            <p className="text-gray-300">Completed</p>
          </div>

          <div className="p-4 bg-white/10 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white">3</h3>
            <p className="text-gray-300">Certificates</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;