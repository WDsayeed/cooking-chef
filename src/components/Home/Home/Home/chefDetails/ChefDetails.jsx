import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../recipe/Recipe";

const ChefDetails = () => {
  
  const details = useLoaderData();
  const recipes = details.recipes;
  const { id, bio, name, img_url, experience, num_recipes, likes, rating } =
    details;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-24">
        <figure>
          <img className="w-80 object-cover" src={img_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className=" h-0">
            <span className="font-medium">Experience:</span> {experience}
          </p>
          <p className=" h-0">
            <span className="font-medium">Likes:</span> {likes}
          </p>
          <p className=" h-0">
            <span className="font-medium">Number of recipes:</span>{" "}
            {num_recipes}
          </p>
          <p className="my-3 h-0">
            <span className="font-medium">Bio:</span> {bio}
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center mt-10 mb-8">
        Our <span className="text-purple-700">Chef's</span> Recipes
      </h1>
     
      <div className="grid md:grid-cols-3 gap-20 mx-auto md:container">
        {recipes.map((recipe, idx) => (
          <Recipe recipe={recipe} key={idx}></Recipe>
        ))}
      </div>
    </>
  );
};

export default ChefDetails;
