import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar px-4 bg-base-100">
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
              <li>
                <Link className="hover:bg-warning hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:bg-warning hover:text-white" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <a className=" font-bold normal-case text-xl lg:text-3xl text-warning hidden md:block">
            Master Chefs
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="hover:bg-warning hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:bg-warning hover:text-white" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div>
              <img
                className={`w-10 rounded-full mx-2`}
                src={user.photoURL}
              ></img>
            </div>
          )}
          {user ? (
            <Link
              onClick={handleSignOut}
              className="btn btn-warning mr-2 text-white"
            >
              Log out
            </Link>
          ) : (
            <Link to="/user/login" className="btn btn-warning mr-2 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
