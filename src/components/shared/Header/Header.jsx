import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 md:container md:mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl">Cooking<span className="text-purple-700">Master</span></a>
      </div>
      <div className="">
        <a className="btn btn-ghost normal-case text-gray-600 text-lg">Home</a>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-gray-600 text-lg">Blog</a>
      </div>
      <div className="flex-none gap-2">  
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
      </div>
    </div>
  );
};

export default Header;
