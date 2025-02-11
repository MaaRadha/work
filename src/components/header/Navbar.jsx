import { NavLink } from "react-router-dom";
import pic from "../../assets/avatar.jpg";
import { Tooltip } from "react-tooltip";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const navItems = [
    { id: 1, text: "Hjem", path: "/" },
    { id: 2, text: "Prosjekter", path: "/work" },
  ];

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-gray-700 rounded-lg  border-b-4">
        <ul className="flex space-x-6 items-center">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  ` text-md font-bold transition-colors duration-200 ${
                    isActive ? "text-violet-500" : "text-gray-700"
                  } hover:text-200`
                }
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
          {isAuthenticated ? (
            <button
              className="text-sm font-bold bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </ul>
        <div id="not-clickable" className="flex items-center space-x-4">
          <div className="hidden md:block">{user && <p>{user.name}</p>}</div>
          {isAuthenticated ? (
            <NavLink to="/">
              <img
                id="my-tooltip"
                src={user.picture || pic}
                alt="User Avatar"
                className="hidden md:block h-12 w-12 rounded-full border-2 border-blue-500"
                data-tooltip-id="my-tooltip"
              />
            </NavLink>
          ) : (
            <img
              id="my-tooltip"
              src={pic}
              alt="User Avatar"
              className="hidden md:block h-12 w-12 rounded-full border-2 border-blue-500"
              data-tooltip-id="my-tooltip"
            />
          )}

          <Tooltip id="my-tooltip" place="top" content="Profile Pic!" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
