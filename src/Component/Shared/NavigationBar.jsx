import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import  "./Navigation.css";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = ()=>{
    setIsHover(true)
  }
  const handleMouseOut = ()=>{
    setIsHover(false)
  }


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
      <div className="navbar md:px-4 bg-base-100">
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
                <NavLink
                  to="/"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                >
                  Blog
                </NavLink>
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
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
          {user && (
            <div>
              <img onMouseOver={handleMouseHover}
              onMouseOut={handleMouseOut}
                className={`w-10 rounded-full mx-2`}
                src={user.photoURL}
              ></img>
              <div className=" rounded-lg">
                {
                  isHover ? <p className="text-black absolute top-13 right-15 bg-base-200 py-2 px-2 ">{user&&user.displayName}</p>:""

                }
              </div>
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
