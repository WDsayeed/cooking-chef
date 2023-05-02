import React, { useEffect, useState } from "react";
import Chef from "./chef";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return <div className="md:container mx-auto items-center justify-center grid grid-cols-3 gap-10 my-24">
        {
                chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
        }
  </div>;
};

export default Home;
