import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  // console.log(user)
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error=> console.log(error))
  }
  return (
    <div className="bg-purple-100">
      <div className="navbar md:container md:mx-auto">
      <div className="md:flex-1">
        <h1 className="font-semibold text-4xl">Cooking<span className="text-purple-700">Master</span></h1>
      </div>
      <div className="mx-5">
        <NavLink to="/"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Home
        </NavLink>
      </div>
      <div className="md:flex-1">
        {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
        <NavLink to="/blog"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Blog
        </NavLink>
      </div>
      <div className="mr-4">
        {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
        <NavLink to="/register"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Register
        </NavLink>
      </div>
      {
        user && <div className="md:flex-none gap-2 mr-2 ">  
        <div  className="w-10 rounded-full "  >
          <img data-tooltip-target="tooltip-default"  src={user?.photoURL} />
          <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">{user.displayName}</div>
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
  </div>
      }
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
