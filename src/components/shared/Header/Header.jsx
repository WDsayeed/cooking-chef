import React from "react";
import { Link } from "react-router-dom";
import headerPhoto from '../../../assets/12ac606896dfc98f4806b7acababed67.jpg'

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 md:container md:mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl">Cooking<span className="text-purple-700">Master</span></a>
      </div>
      <div className="mx-5">
        <Link to="/" className=" text-gray-600 text-lg">Home</Link>
      </div>
      <div className="flex-1">
        <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link>
      </div>
      <div className="flex-none gap-2">  
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
      </div>
      <Link to="/login">
      <button className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Login</button>
      </Link>
    </div>
    <div className="flex justify-between items-center md:container md:mx-auto">
      <div>
        <h1 className="font-semibold text-5xl leading-tight">Make Your <br /> <span className="text-purple-700">Dream Food</span> <br /> With Us</h1>
      </div>
      <img className="h-[600px] rounded" src={headerPhoto} alt="" />
    </div>
    </div>
  );
};

export default Header;
