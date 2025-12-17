import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  

  const [loggedIn, setLoggedIn] = useState(() => {
  const token = localStorage.getItem("authToken");
  return !!token;
});


  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="w-full fixed top-0 left-0 shadow-md bg-white backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          TL Academy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link to="/courses" className="hover:text-blue-600 transition">Courses</Link></li>
          
        </ul>

    

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!loggedIn ? (
            <>
              <Link to="/login">
                <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-4 space-y-4 shadow-lg animate-slideDown">

          {/* Mobile Links */}
          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/courses" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Courses</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            {!loggedIn ? (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <button className="w-full px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                    Login
                  </button>
                </Link>

                <Link to="/register" onClick={() => setOpen(false)}>
                  <button className="w-full px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;