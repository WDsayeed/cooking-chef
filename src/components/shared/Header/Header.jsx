import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className=" shadow-xl navbar bg-purple-100">
      <div className="navbar md:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-950 font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-purple-950 font-semibold" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="mr-4">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-purple-950 font-semibold" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="md:font-semibold md:text-4xl">
              Cooking<span className="text-purple-700">Master</span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-purple-950 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="">
              {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-purple-950 font-semibold" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="mr-4">
              {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-purple-950 font-semibold" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="md:flex-none gap-2 mr-2 ">
              <div className="w-10  rounded-full ">
                <img
                className="rounded-full h-10 ring-2 ring-purple-600"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={user?.photoURL}
                />
                {/* <Tooltip></Tooltip> */}
                {user.displayName && <Tooltip  id="my-tooltip"></Tooltip>}
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className=" btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
