import React from "react";
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefsCard = ({ chef }) => {
  const { picture, id, likes, name, number_of_recipes, years_of_experience } =
    chef;
  console.log(chef);
  return (
    <div>
      <div className="card w-full glass">
        <figure>
          <img src={picture} alt="chef!" />
        </figure>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
          <div className="flex justify-between items-center">
            <div>
              <p>Experience {years_of_experience} years</p>
            </div>
            <div>
               <p className="flex items-center gap-2"> <FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
            </div>
          </div>

          <div className="card-actions justify-start">
            <button className="btn btn-primary">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
