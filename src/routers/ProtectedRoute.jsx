import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("authToken");

  // 1️⃣ Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let user = null;

  // 2️⃣ Decode token safely (NO JSX here)
  try {
    user = jwtDecode(token);
  } catch {
    localStorage.removeItem("authToken");
    return <Navigate to="/login" replace />;
  }

  // 3️⃣ Role missing
  if (!user?.role) {
    localStorage.removeItem("authToken");
    return <Navigate to="/login" replace />;
  }

  // 4️⃣ Role not allowed
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 5️⃣ Authorized
  return children;
};

export default ProtectedRoute;
