import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
    const {createUser,updateNameProfile}= useContext(AuthContext)

    const handleRegister=(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset()
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
        updateNameProfile(name,photo)
    }


  return (
    <div>
      <div className="hero md:min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full md:w-[400px] max-w-lg shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover">
                    Already You have account ? <Link to="/user/login">Login</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <div className="text-center my-6">
                <h4>OR</h4>
                <h4>Login with</h4>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <span><FaGoogle className="text-4xl"></FaGoogle></span>
                    <span><FaGithub className="text-4xl "></FaGithub></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
