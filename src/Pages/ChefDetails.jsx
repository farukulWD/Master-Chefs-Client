import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefHeader from "../Component/Shared/ChefHeader";
import RecipeCard from "../Component/Card/RecipeCard";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { recipes } = chef;
  //   console.log(chef);
  return (
    <div>
      <ChefHeader></ChefHeader>
      <section className="px-4 my-6  mx-auto">
        <h2 className="text-center text-warning text-6xl font-bold mt-10 mb-7 ">
          My Awesome Recipes
        </h2>
        <p className="text-center mx-auto w-[50%] mb-16">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          saepe aliquam sint. Eos sapiente, eligendi molestias vel corrupti
          obcaecati deserunt!
        </p>
        <div>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefDetails;
