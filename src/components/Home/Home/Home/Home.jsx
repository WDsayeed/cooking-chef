import React, { useEffect, useState } from "react";
import Chef from "./chef";
import headerPhoto from '../../../../assets/12ac606896dfc98f4806b7acababed67.jpg'


const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return <>
  <div className="flex justify-between items-center md:container md:mx-auto">
      <div>
        <h1 className="font-semibold text-5xl leading-tight">Make Your <br /> <span className="text-purple-700">Dream Food</span> <br /> With Us</h1>
      </div>
      <img className="h-[600px] rounded" src={headerPhoto} alt="" />
    </div>
  <div className="md:container mx-auto items-center justify-center grid grid-cols-3 gap-10 my-24">
        {
                chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
        }
  </div>;
  </>
};

export default Home;
