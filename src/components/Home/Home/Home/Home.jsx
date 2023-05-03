import React, { useContext, useEffect, useState } from "react";
import Chef from "./chef";
import headerPhoto from '../../../../assets/12ac606896dfc98f4806b7acababed67.jpg'
import { AuthContext } from "../../../providers/AuthProvider";


const Home = () => {
  const [loading, setLoading] = useState(true)
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);
  return <>
  <div className="bg[#eee] md:flex justify-around items-center md:container md:mx-auto mt-16 mb-28">
      <div>
        <h1 className="font-semibold text-5xl leading-tight">Make Your <br /> <span className="text-purple-700">Dream Food</span> <br /> With Us</h1>
      </div>
      <img className="h-[600px] rounded" src={headerPhoto} alt="" />
    </div>
    <h1 className="text-5xl font-semibold text-center mb-2">Our  <span className="text-purple-700">Chefs</span></h1>
    <div className="bg-purple-700 w-96 h-[2px] mx-auto mb-12"></div>
  <div className="md:container mx-auto items-center justify-center grid md:grid-cols-3 gap-20 mb-16 mt-10">
        {
               loading ? <div className="ml-96 w-full ">
                <div className="animate-spin flex mx-auto items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500">
               <div className="h-9 w-9 rounded-full bg-gray-200"></div>
             </div>
               </div> :
               chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
        }
  </div>
  </>
};

export default Home;
