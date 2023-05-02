import React from "react";
import { Form, Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

  const handleLogin = event=>{
    
  }
  return (
    <>
      <h2 className="text-center mt-16 mb-8 text-4xl">Please Login</h2>
      <Form className="hero mb-20 bg-base-200" onSubmit={handleLogin}>
        <div className="hero-content w-2/4 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" h-12 rounded text-white bg-purple-600">
                  Login
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600">
                  <FaGoogle className="h-7 w-5"></FaGoogle>
                  Google Sign-in
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600">
                  <FaGithub className="h-7 w-5"></FaGithub>
                  GitHub Sign-in
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-purple-600 underline">
                  create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
