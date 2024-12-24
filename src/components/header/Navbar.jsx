import { NavLink } from "react-router-dom";
import pic from "../../assets/avatar.jpg";

// import { useState } from "react";
const navItems = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Work", path: "/work" },
];

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-gray-700 rounded-lg">
        <ul className="flex space-x-6 items-center">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  ` text-base font-bold transition-colors duration-200 ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-200`
                }
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <img
            src={pic}
            alt="User Avatar"
            className="h-12 w-12 rounded-full border-2 border-blue-500"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
