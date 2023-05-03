import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefHeader = () => {
    const chef = useLoaderData();
    const {picture,name,chef_description,years_of_experience,number_of_recipes,likes}=chef;
  return (
    <div>
      <div className="hero md:min-h-screen bg-red-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture}
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="py-6">
              {chef_description}
            </p>
            <p className="">
              <span className="mr-10">Experience {years_of_experience} years</span>
              <span>Recipes {number_of_recipes}</span>
            </p>
            <p className="py-6 flex gap-2 items-center"><FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefHeader;
