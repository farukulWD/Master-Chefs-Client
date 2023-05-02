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

      <div className="px-5 my-6  mx-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
