import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe, rating }) => {
  const { name, cookingMethod, ingredients } = recipe;

  const [isDisable, setDisable] = useState(false)
  const handleFavBtn = ()=>{
    setDisable(true)
    return toast.success('Favorite recipe')
  }
  return (    
      <div className="card bg-base-100 mb-10 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <h3 className="text-xl font-medium">Ingredients:</h3>
            {ingredients.map((ing) => (
              <li>{ing}</li>
            ))}
          </div>
          <p>
            <span className="text-xl font-medium">Cooking method:</span>
            {cookingMethod}
          </p>

         <div>
          <div className="flex items-center flex-grow-1">
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly/>
          <span>{rating}</span>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleFavBtn} disabled={isDisable}  className="px-5 h-12 rounded text-white bg-purple-600">
              Add to favorite
            </button>
          </div>
         </div>
        </div>
      </div> 
  );
};

export default Recipe;
