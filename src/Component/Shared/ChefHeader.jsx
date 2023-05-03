import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefHeader = () => {
    const chef = useLoaderData();
    const {picture,name,chef_description,years_of_experience,number_of_recipes,likes}=chef;
  return (
    <div className="px-4">
      <div className="hero  md:min-h-screen hero-overlay bg-opacity-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture}
            className="w-full  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className=" mb-5 text-5xl text-warning font-bold">{name}</h1>
            <p className="py-6 w-[450px]">
              {chef_description}
            </p>
            <p className="">
              <span className="mr-10 font-bold text-lg text-dark">Experience {years_of_experience} years</span>
              <span className="text-lg font-bold text-dark">Recipes {number_of_recipes}</span>
            </p>
            <p className="py-6 text-lg font-bold flex gap-2 text-dark items-center">Likes  <FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefHeader;
