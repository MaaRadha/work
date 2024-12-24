import { NavLink } from "react-router-dom";
import pic from "../../assets/avatar.jpg";
import logo from "../../assets/logo.png";
// import { useState } from "react";
const navItems = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Work", path: "/work" },
];

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-20 backdrop-blur-lg bg-transparent">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  ` text-base font-bold transition-colors duration-200 ${
                    isActive ? "text-blue-900" : "text-gray-600"
                  } hover:text-black`
                }
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <img
            src={pic}
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-blue-500"
          />
        </div>

        {/* Mobile Menu Toggle (Optional) */}
        {/* <button
          className="sm:hidden block text-gray-300 hover:text-white focus:outline-none"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button> */}
      </nav>
    </header>
  );
};

export default Navbar;
