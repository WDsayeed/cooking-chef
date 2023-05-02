import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

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
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }
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
