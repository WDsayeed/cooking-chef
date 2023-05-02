import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, name, img_url, experience, num_recipes, likes} = chef;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 object-cover w-full"
          src={img_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {experience}</p>
        <p>Recipes: {num_recipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
        <Link to={`/details/${id}`}>
        <button className="px-5 h-12 rounded text-white bg-purple-600">
        View Recipes
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
