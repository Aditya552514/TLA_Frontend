 import React from "react";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#0b1220" }}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15">
            <Construction className="text-blue-400" size={26} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Page under construction
            </h1>
            <p className="text-sm text-gray-400">
              This feature is not available yet
            </p>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          We’re actively working on this section and it will be released in an
          upcoming update. Until then, you can continue using other parts of the
          platform without interruption.
        </p>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition"
        >
          <ArrowLeft size={16} />
          Back to dashboard
        </Link>
      </div>
    </div>
  );
};

export default WorkInProgress;
