// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo and Company Name */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Company Logo" className="w-12 h-12" />
        <h1 className="text-xl font-bold text-indigo-600">JobFinder</h1>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li><Link to="/job-list" className="hover:text-indigo-600">Jobs</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
          <li><Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
