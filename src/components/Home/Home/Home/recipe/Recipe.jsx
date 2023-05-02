import React from "react";

const Recipe = ({ recipe, rating }) => {
  const { name, cookingMethod, ingredients } = recipe;
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
          <div className="card-actions justify-end">
            <button className="px-5 h-12 rounded text-white bg-purple-600">
              Add to favorite
            </button>
          </div>
        </div>
      </div> 
  );
};

export default Recipe;
