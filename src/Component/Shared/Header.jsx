import React from "react";
import NavigationBar from "./Navigationbar";

const Header = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="px-4 mt-3">
        <div
          className=" hero h-96 md:min-h-screen"
          style={{
            backgroundImage: `url(https://i.ibb.co/xggBd0J/chef.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-warning text-white text-xl ">
                Get Chefs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
