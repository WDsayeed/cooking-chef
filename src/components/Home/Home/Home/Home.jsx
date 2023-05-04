import React, { useContext, useEffect, useState } from "react";
import Chef from "./chef";
import headerPhoto from "../../../../assets/chef-bg-gray.jpg";
import delivaryImg from "../../../../assets/delivery.jpg";
import aboutImg from "../../../../assets/group-chef-waiters-26749735.jpg";
import AOS from 'aos';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);

  useEffect(()=>{
    AOS.init({duration: 1000});
  } ,[])

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-[#eee] sm:p-3">
      <div className=" md:flex justify-around items-center md:container md:mx-auto pt-16 mb-28">
        <div>
          <h1 className="font-semibold text-5xl leading-tight mb-3">
            Make Your <br /> <span className="text-purple-700">Dream Food</span>{" "}
            <br /> With Us
          </h1>
          <p className="text-gray-600">
            The chef is responsible for everything about the food in a
            restaurant. <br /> He is responsible for buying the food, hiring and
            supervising the kitchen <br /> workers, creating the menus for the
            customers..
          </p>
        </div>
        <img className=" rounded bg-slate-600" src={headerPhoto} alt="" />
      </div>
      </div>
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

      
        <div className="md:flex md:container mx-auto my-28 shadow-lg items-center gap-28"  data-aos="fade-up">
          <div className=" md:w-2/5">
            <img className="w-full rounded-lg" src={delivaryImg} alt="" />
          </div>
          <div>
      <div className="bg-purple-200 md:w-96 h-[2px] mb-3"></div>

          <h1 className="font-semibold text-3xl text-gray-700 mb-3">WHAT THEW SAY</h1>
          <div className="bg-purple-200 md:w-96 h-[2px] mb-6"></div>
      
      <p className="text-gray-600 text-2xl mb-10"> "Becoming a cook is our dream since we was little, <br /> and here we have found a way to make it open."</p>
      <h1 className="text-xl text-gray-600">Chefs family</h1>
      <div className="bg-purple-200 md:w-32 h-[2px]"></div>

       {/* <div className="text-end mr-8">
       <button className="btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">Order now</button>
       </div> */}
          </div>
        </div>
      
      <div className="md:flex md:container mx-auto mb-24 flex-cols-reverse  justify-evenly items-center " data-aos="fade-up">
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-gray-700 mb-3">ABOUT US</h1>
          <div className="bg-purple-200 md:w-96 h-[2px] mb-3"></div>
          <p className="text-gray-600">Our Chefs offer you perfect cooking, best served dishes <br /> with fresh ingredients and old recipes.  We have only carefully <br /> sourced and seasonal ingredients in our disposal to make rustic <br />dishes.  We provide you with daily self-made bread, sourdough pizza,<br /> roasted fish-meat-vegetables and many more.</p>
        </div>
        <div className="md:w-[30%] text-end"><img className="w-full rounded" src={aboutImg} alt="" /></div>
      </div>
    </>
  );
};

export default Home;
