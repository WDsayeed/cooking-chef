import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { name, cookingMethod, ingredients, rating  } = recipe;

  const [isDisable, setDisable] = useState(false)
  const handleFavBtn = ()=>{
    setDisable(true)
    return toast.success('Favorite recipe')
  }
  return (    
      <div className="card bg-base-100 mb-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
      <div className="bg-purple-700 md:w-96 h-[2px] mx-auto mb-5"></div>

          <div>
            <h3 className="text-xl font-medium">Ingredients:</h3>
            {ingredients.map((ing) => (
              <li>{ing}</li>
            ))}
          </div>
          <p>
            <span className="text-xl font-medium">Cooking method: </span>
            {cookingMethod}
          </p>

         <div>
          <div className="flex items-center flex-grow-1">
          <Rating style={{ maxWidth: 150 }} value={Math.round(rating)} readOnly/>
          <span>{rating}</span>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleFavBtn} disabled={isDisable}  className="btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">
              Add to favorite
            </button>
          </div>
         </div>
        </div>
      </div> 
  );
};

export default Recipe;
