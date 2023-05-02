import React from "react";
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const RecipeCard = ({ recipe }) => {
  const { recipe_name, recipe_img, ingredients, instructions, rating } = recipe;
  const shortD = instructions.slice(0, 5);
  console.log(shortD);
  return (
    <>
      <div className="card md:card-side my-6 bg-red-200 shadow-xl">
        <img className="md:w-72 p-3 rounded-lg" src={recipe_img} alt="recipe" />

        <div className="card-body">
          <h2 className="card-title text-center text-black text-2xl">
            {recipe_name}
          </h2>
          <div className="md:flex justify-between items-center  gap-4">
            <div>
              <h4 className="text-xl font-bold text-black">Ingredients</h4>
              <p>
                {ingredients.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </p>
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-black">Cooking method</h4>
              <div className="w-60">
                <p>{instructions.slice(0, 145)}...</p>
              </div>
            </div>
            <div>
              <div className="text-xl">

              <Rating
                readonly
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar className="text-warning"></FaStar>}
              /> <span>{rating.number}</span>
              </div>
              <button className="btn btn-primary my-8">
                add bookmark <FaBookmark className="ml-2"></FaBookmark>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
