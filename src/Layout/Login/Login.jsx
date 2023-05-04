import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
    const {loginWithEmail,loginWithGoogle,loginWithGithub}=useContext(AuthContext)
    const [error, setError]=useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname ||'/';


    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        loginWithEmail(email,password)
        .then(result=>{
            const loggedUser = result.user;
            
            navigate(from)
        })
        .catch(error=>{
            const errorMessage =(error.message);
            setError(errorMessage);

        })
      }
      
      const handleGoogleLogin = ()=>{
        loginWithGoogle()
        .then(result=>{
          const getUser = result.message;
          navigate(from)
        })
        .catch(error=>{
          
        })
      }
      const handleGithubLogin = ()=>{
        loginWithGithub()
        .then(result=>{
          const getUser = result.message;
          
          navigate(from)
        })
        .catch(error=>{
          
        })
      }
  return (
    <div>
      <div className="hero md:min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-warning">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full md:w-[400px] max-w-lg shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label my-4 font-semibold">
                  <p href="#" className="label-text-alt text-red-500 text-xl">
                  {error && "PassWord or email wrong"}
                  </p>
                </label>
                <label className="label my-4 font-semibold">
                  <p href="#" className="label-text-alt text-xl">
                  Are you new here ? <Link className="text-warning" to="/user/register">Register</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <div>
                <div className="text-center my-6">
                <h4 className="text-xl">OR</h4>
                <h4 className="text-lg text-warning">Login with</h4>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <span onClick={handleGoogleLogin} className="cursor-pointer"><FaGoogle className="text-4xl"></FaGoogle></span>
                    <span onClick={handleGithubLogin} className="cursor-pointer"><FaGithub className="text-4xl "></FaGithub></span>
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
