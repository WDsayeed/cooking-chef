import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState('')
  // const [emailError, setEmailError] = useState('')
  // const [errorPassword, setErrorPassword] = useState('')
  
  
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if(error){
    return toast.error(error)
    
    }

    
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setEmailError("")
        navigate(from, {replace: true});
        form.reset()
      })
      .catch((error) => {
        setError(error.message)
        // console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, {replace: true});
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, {replace: true})
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Toaster></Toaster>
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
                  name="email"
                  className="input input-bordered"
                />
              </div>
              {/* <p className="text-red-600">{errorEmail}</p> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              
              <div className="form-control mt-6">
                <button className=" btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">
                  Login
                </button>
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-3 btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white"
                >
                  <FaGoogle className="h-7 w-5"></FaGoogle>
                  Google Sign-in
                </button>
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={handleGithubSignIn}
                  className="flex items-center justify-center gap-3 btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white"
                >
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
