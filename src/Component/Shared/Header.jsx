import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <NavigationBar></NavigationBar> */}
      <div className="md:px-4 mt-3">
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
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">Recipes, Cooking Tips, and Food News</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/blog" className="btn btn-warning text-white text-xl ">
                see blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
