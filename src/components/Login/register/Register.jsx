import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app)
const Register = () => {
  const {createUser, googleSignIn,githubSignIn ,updateUser} = useContext(AuthContext)
  const [errorPassword, setErrorPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  

  const handleRegister = event=>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const photo = form.photo.value
    const password = form.password.value 

    if(password.length < 6){
      setErrorPassword('Password should be at least 6 characters')
      return
    }
    
    createUser(email, password)
    .then(result=>{
    
      const createdUser = result.user
      createdUser.photoURL = photo,
      createUser.displayName = name  
      setErrorPassword("")
      form.reset()
      console.log(createdUser)
   
      const userInfo ={
        displayName: name,
        photoURL: photo
        }
        updateUser(userInfo)
        .then(()=>{
          console.log('profile updated')
        })

      navigate("/");
      form.reset()
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

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
      <h2 className="text-center mt-16 mb-8 text-4xl">Please Register</h2>
      <Form className="hero mb-20 bg-base-200" onSubmit={handleRegister}>
        <div className="hero-content w-2/4 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                /> 
              </div>
              <p className="text-red-700">{errorPassword}</p>
              <div className="form-control mt-6">
                <button className=" btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">Register</button>
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
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
