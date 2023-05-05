import React, { useContext, useEffect, useState } from "react";
import headerPhoto from "../../../../assets/head.png";
import rev from "../../../../assets/reviewb.jpg";
import rev1 from "../../../../assets/reviewm.jpg";
import rev2 from "../../../../assets/review.png";
import aboutImg from "../../../../assets/group-chef-waiters-26749735.jpg";
import AOS from "aos";
import Chef from "./Chef";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(()=>{
    AOS.init({duration: 1000});
  } ,[])

  useEffect(() => {
    fetch("https://cooking-master-server-wdsayeed.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-[#eee]">
        <div className="md:flex justify-around items-center md:container md:mx-auto pt-16">
          <div>
            <h1 className="font-semibold text-5xl leading-tight mb-3">
              Make Your <br />{" "}
              <span className="text-purple-700">Dream Food</span> <br /> With Us
            </h1>
            <p className="text-gray-600">
              The chef is responsible for everything about the food in a
              restaurant. <br /> He is responsible for buying the food, hiring
              and supervising the kitchen <br /> workers, creating the menus for
              the customers..
            </p>
            <button className=" mt-6 btn hover:border hover:text-purple-800 hover:border-purple-900 bg-purple-600 text-white">
              EXPLORE NOW
            </button>
          </div>
          <div className="h-[700px]">
          <LazyLoadImage src={headerPhoto} alt="Shoes" height={"100%"}
          width={"100%"} effect="blur" className="h-full object-cover w-full" />
            {/* <img className="h-full rounded" src={headerPhoto} alt="" /> */}
          </div>
        </div>
      </div>

      {/*chef card section*/}
      <h1 className="text-5xl font-semibold text-center mt-28 ">
        Our <span className="text-purple-700">Chefs</span>
      </h1>
      <div className="bg-purple-700 md:w-96 h-[2px] mx-auto mb-16"></div>
      <div className="md:container mx-auto items-center justify-center grid md:grid-cols-3 gap-20 mb-16 mt-10">
        {loading ? (
          <div className="ml-96 w-full ">
            <div className="animate-spin flex mx-auto items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500">
              <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
          </div>
        ) : (
          chefs.map((chef) => <Chef key={chef.id} chef={chef}></Chef>)
        )}
      </div>

      
        <div className="bg-purple-200 md:w-96 mx-auto h-[2px] mb-3 mt-40"></div>
        <h1 className="font-semibold text-3xl text-center text-gray-700 mb-3">
          WHAT THEY SAY
        </h1>
        <div className="bg-purple-200 md:w-96 mx-auto h-[2px] mb-14"></div>

      {/* review section */}
      <div className="md:flex md:container justify-around mx-auto gap-10" data-aos="zoom-in">
        <div className="card  md:w-[650px]  bg-base-100 shadow-xl">
          <figure>
            <LazyLoadImage src={rev} alt="Shoes" height={"100%"}
          width={"100%"} effect="blur" className="h-60 object-cover w-full" />
          </figure>
          <div className="card-body">
            <p className="text-gray-600 text-2xl mb-10 text-center">
              {" "}
              "Becoming a cook is our dream since we was little, and here we
              have found a way to make it open."
            </p>
            <div className="card-actions justify-end">
              <h1 className="text-xl font-medium">Kalam Uddin</h1>
            </div>
          </div>
        </div>
        <div className="card  md:w-[650px] bg-base-100 shadow-xl">
          <figure>
            <LazyLoadImage src={rev1} alt="Shoes" height={"100%"}
          width={"100%"} effect="blur" className="h-60 object-cover w-full" />
          </figure>
          <div className="card-body">
            <p className="text-gray-600 text-2xl mb-10 text-center">
              I'm blown away by the talent and creativity of the chef behind it.
              The website is a true feast for the senses.
            </p>
            <div className="card-actions justify-end">
              <h1 className="text-xl font-medium">Jamal Mia</h1>
            </div>
          </div>
        </div>
        <div className="card  md:w-[650px] bg-base-100 shadow-xl">
          <figure>
            <LazyLoadImage src={rev2} alt="Shoes" effect="blur" height={"100%"}
          width={"100%"} className="h-60 object-cover w-full" />
          </figure>
          <div className="card-body">
            <p className="text-gray-600 text-2xl mb-10 text-center">
              {" "}
              I love about the variety of recipes. Whether you're looking for
              something quick and easy or a more complex dish to impress your
              dinner guests,
            </p>
            <div className="card-actions justify-end">
              <h1 className="text-xl font-medium">Nasima Khatun</h1>
            </div>
          </div>
        </div>
      </div>

{/* about section */}
      <div
        className="md:flex md:container mx-auto mt-44 mb-24 flex-cols-reverse  justify-evenly items-center"
        data-aos="zoom-in"
      >
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-gray-700 mb-3">
            ABOUT US
          </h1>
          <div className="bg-purple-200 md:w-96 h-[2px] mb-3"></div>
          <p className="text-gray-600">
            Our Chefs offer you perfect cooking, best served dishes <br /> with
            fresh ingredients and old recipes. We have only carefully <br />{" "}
            sourced and seasonal ingredients in our disposal to make rustic{" "}
            <br />
            dishes. We provide you with daily self-made bread, sourdough pizza,
            <br /> roasted fish-meat-vegetables and many more.
          </p>
        </div>
        <div className="md:w-[30%] text-end">
          {/* <img className="w-full rounded" src={aboutImg} alt="" /> */}
          <LazyLoadImage src={aboutImg} alt="Shoes" height={"100%"}
          width={"100%"} effect="blur" className=" object-cover w-full" />
        </div>
      </div>
    </>
  );
};

export default Home;
