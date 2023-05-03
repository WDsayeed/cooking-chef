import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app)
const Register = () => {
  const {createUser,googleSignIn} = useContext(AuthContext)

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = event=>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const photo = form.photo.value
    const password = form.password.value 
    console.log(name, email, password, photo)
    createUser(email, password)
    .then(result=>{
      const createdUser = result.user 
      if(createUser){
        updateProfile(createUser, {
          displayName:name,
          photoURL: photo
        })
        .then(()=>{
          console.log('profile update')
        })
        .catch(()=>{
          console.log(error)
        })
      }
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
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
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                /> 
              </div>
              <div className="form-control mt-6">
                <button className=" h-12 rounded text-white bg-purple-600">Register</button>
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600"
                >
                  <FaGoogle className="h-7 w-5"></FaGoogle>
                  Google Sign-in
                </button>
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={handleGithubSignIn}
                  className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600"
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
