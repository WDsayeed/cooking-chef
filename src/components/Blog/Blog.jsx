import React from 'react';


const Blog = () => {
  return (
    <div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div className="container mx-auto my-11"  ref={ref}>
    
      <div  className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          1. Differences between uncontrolled and controlled components
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Controlled components
          refer to components that have their state and behavior controlled by
          the parent component. These components rely on props passed down from
          the parent component to update their state and behavior. Uncontrolled
          components refer to components that manage their own state internally.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          2. How to validate React props using PropTypes
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Props are an important
          mechanism for passing the read-only attributes to React components.
          The props are usually required to use correctly in the component. If
          it is not used correctly, the components may not behave as expected.
          Hence, it is required to use props validation in improving react
          components.Props validation is a tool that will help the developers to
          avoid future bugs and problems. It is a useful way to force the
          correct usage of your components. It makes your code more readable.
          React components used special property PropTypes that help you to
          catch bugs by validating data types of values passed through props,
          although it is not necessary to define components with propTypes.
          However, if you use propTypes with your components, it helps you to
          avoid unexpected bugs.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          3. Difference between nodejs and express js.
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Express is a minimal
          and flexible node. js web application framework, providing a robust
          set of features for building single and multi-page, and hybrid web
          applications. On the other hand, Node. js is detailed as "A platform
          built on Chrome's JavaScript runtime for easily building fast,
          scalable network applications".
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Custom React JS hooks
          are reusable functions that a React JS software developer can use to
          add special and unique functionality to the React applications.
          Usually, if there is a requirement to add a feature, one can install a
          third-party library and solve the problem.
        </p>
      </div>
    </div>



{/* navber */}
    <div className="navbar-start md:container md:mx-auto">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

      
      
      <li className="mr-4">
        {/* <Link to="/blog" className=" text-gray-600 text-lg">Blog</Link> */}
        <NavLink to="/register"
        className={({ isActive }) => (isActive ? "text-purple-950 font-semibold" : '')}
        >
          Register
        </NavLink>
      </li>
      </ul>
      <div className="">
        <h1 className="font-semibold text-4xl">Cooking<span className="text-purple-700">Master</span></h1>
      </div>
      
     
     
      {
        user && <div className="md:flex-none gap-2 mr-2 ">  
        <div  className="w-10 rounded-full "  >
          <img data-tooltip-target="tooltip-default"  src={user?.photoURL} />
        </div>
  </div>
      }
      {
        user ? <button onClick={handleLogOut} className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Logout</button>:
        <Link to="/login">
        <button className=" text-white w-16 h-10 rounded  px-2 bg-purple-600">Login</button>
        </Link>
      }
    </div>
    {/* nav */}
    </div>

  );
};

export default Blog;
