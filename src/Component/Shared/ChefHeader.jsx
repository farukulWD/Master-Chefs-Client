import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefHeader = () => {
    const chef = useLoaderData();
    console.log(chef);
    const {picture,name}=chef;
  return (
    <div>
      <div className="hero md:min-h-screen md:bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture}
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefHeader;
