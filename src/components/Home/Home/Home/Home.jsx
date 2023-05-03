import React, { useContext, useEffect, useState } from "react";
import Chef from "./chef";
import headerPhoto from "../../../../assets/12ac606896dfc98f4806b7acababed67.jpg";
import delivaryImg from "../../../../assets/delivery.jpg";
import aboutImg from "../../../../assets/group-chef-waiters-26749735.jpg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);

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
      <div className="bg[#eee] md:flex justify-around items-center md:container md:mx-auto mt-16 mb-28">
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
        <img className="h-[600px] rounded" src={headerPhoto} alt="" />
      </div>
      <h1 className="text-5xl font-semibold text-center mb-2">
        Our <span className="text-purple-700">Chefs</span>
      </h1>
      <div className="bg-purple-700 w-96 h-[2px] mx-auto mb-12"></div>
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

      
        <div className="flex md:container mx-auto my-28 shadow-lg items-center gap-28">
          <div className=" w-2/5">
            <img className="w-full rounded-lg" src={delivaryImg} alt="" />
          </div>
          <div>
          <h1 className="font-semibold text-3xl text-gray-700 mb-3">DELIVERY</h1>
      
      <p className="text-gray-600"> We bring delicious, freshly prepared meals right to your doorstep, 
       so you can enjoy <br /> restaurant-quality cuisine in the  comfort  of your 
       own home. With a wide variety of options  to choose from, <br /> you're sure 
       to find something that  satisfies  your cravings.So what are you 
       waiting for? Try our food delivery service <br /> today and  taste the 
       difference for yourself. With  our commitment to quality  and customer
       satisfaction, you can trust that you're in good hands.</p>
       <div className="text-end mr-8">
       <button className=" text-white w-28  rounded mt-4 h-12 bg-purple-600">Order now</button>
       </div>
          </div>
        </div>
      
      <div className="flex md:container mx-auto mb-24   justify-evenly items-center ">
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-gray-700 mb-3">ABOUT US</h1>
          <p className="text-gray-600">Our Chefs offer you perfect cooking, best served dishes <br /> with fresh ingredients and old recipes.  We have only carefully <br /> sourced and seasonal ingredients in our disposal to make rustic <br />dishes.  We provide you with daily self-made bread, sourdough pizza,<br /> roasted fish-meat-vegetables and many more.</p>
        </div>
        <div className="w-[30%] text-end"><img className="w-full rounded" src={aboutImg} alt="" /></div>
      </div>
    </>
  );
};

export default Home;
