import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';

const Chef = ({ chef }) => {
  const { id, name, img_url, experience, num_recipes, likes} = chef;
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    AOS.init({duration: 1000});
  } ,[])
  return (
    <div className="card  bg-base-100 shadow-xl" data-aos="fade-up">
      <figure>
        
        
        <LazyLoadImage className="h-60 object-cover w-full"
        effect="blur"
          src={img_url}
          alt=""
          height={"100%"}
          width={"100%"}
        />
    
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {experience}</p>
        <p>Recipes: {num_recipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
        <Link to={`/details/${id}`}>
        <button onClick={() => setLoading(true)} className="btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">
        {
          loading ? <Loading></Loading> :
          <>View Recipes</>
        }
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
