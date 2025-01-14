import { NavLink } from "react-router-dom";
import pic from "../../assets/avatar.jpg";
import { Tooltip } from "react-tooltip";

// import { useState } from "react";
const navItems = [
  { id: 1, text: "Hjem", path: "/" },
  { id: 2, text: "Prosjekter", path: "/Prosjekter" },
  { id: 3, text: "Gjester", path: "/Gjester" },
];

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-gray-700 rounded-lg  border-b-4">
        <ul className="flex space-x-6 items-center">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  ` text-lg font-bold transition-colors duration-200 ${
                    isActive ? "text-violet-500" : "text-gray-700"
                  } hover:text-200`
                }
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          id="not-clickable"
          className=" hidden md:inline-block lg:flex items-center space-x-4"
        >
          <NavLink to="/">
            <img
              id="my-tooltip"
              src={pic}
              alt="User Avatar"
              className="h-12 w-12 rounded-full border-2 border-blue-500"
              data-tooltip-id="my-tooltip"
            />
          </NavLink>

          <Tooltip id="my-tooltip" place="top" content="I'm Rohit!" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
