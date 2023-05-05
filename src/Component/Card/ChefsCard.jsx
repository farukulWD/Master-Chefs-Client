import React, { useContext } from "react";
import { FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  
  const { picture, id, likes, name, number_of_recipes, years_of_experience } =
    chef;

  return (
    <div>
      <div className="card w-80 md:w-full mx-auto glass">
        <figure>
          <LazyLoad  height={290} width={500} threshold={0.95}>
          <img   src={picture} alt="chef!" />
          </LazyLoad>
        </figure>
        <div className="card-body">
        <h2 className="card-title text-dark text-3xl">{name}</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg">Experience {years_of_experience} years</p>
            </div>
            <div>
               <p className="flex text-lg items-center gap-2"> <FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
            </div>
          </div>

          <div className="card-actions justify-start mt-3">
            <Link to={`/chef/${id}`}><button className="btn btn-warning">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
