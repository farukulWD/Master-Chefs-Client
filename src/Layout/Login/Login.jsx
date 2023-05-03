import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero md:min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full md:w-[400px] max-w-lg shadow-2xl">
            <form className="card-body">
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
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover">
                  Are you new here ? <Link to="/user/register">Register</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
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

export default Login;
