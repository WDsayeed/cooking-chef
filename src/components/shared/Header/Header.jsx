import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error=> console.log(error))
  }
  return (
    <div className="bg-purple-100">
      <div className="navbar md:container md:mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl">Cooking<span className="text-purple-700">Master</span></a>
      </div>
      <div className="mx-5">
        {/* <Link to="/" className=" text-gray-600 text-lg">Home</Link> */}
        <NavLink to="/"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Home
        </NavLink>
      </div>
      <div className="flex-1">
        {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
        <NavLink to="/blog"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Blog
        </NavLink>
      </div>
      <div className="flex-none gap-2">  
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
      </div>
      {/* <Link to="/login">
      <button className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Login</button>
      </Link> */}
      {
        user ? <button onClick={handleLogOut} className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Logout</button>:
        <Link to="/login">
        <button className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Login</button>
        </Link>
      }
    </div>
    
    </div>
  );
};

export default Header;
