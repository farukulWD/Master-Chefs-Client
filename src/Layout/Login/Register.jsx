import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateNameProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const[success,setSuccess]=useState('')

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (event) => {
    setErrorMessage("");
    setPasswordError("");
    event.preventDefault();
    const form = event.target;
    console.log(form);

    setEmailError("");
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please provide valid email");
      return;
    }

    if (!/.{8,}/.test(password)) {
      setPasswordError("At Least 8 charter");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPasswordError("At Least one digit");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setPasswordError("At least one upper case");
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          updateNameProfile(displayName, photoURL);
          setSuccess("Register has been successfully you can login")
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(error.message);
        });
    }
    setDisplayName('')
    setEmail('')
    setPassword('')
    setPhotoURL('')
  };

  return (
    <div>
      <div className="hero md:min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-warning">Please Register</h1>
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
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                />
                <label className="label">
                  <small className="label-text-alt text-red-500">
                    {emailError}
                  </small>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small className="label-text-alt text-red-500">
                    {passwordError}
                  </small>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  value={photoURL}
                  onChange={(event) => setPhotoURL(event.target.value)}
                  className="input input-bordered"
                />

                <label className="label">
                  <p className="label-text-alt text-red-500 text-lg">
                    {errorMessage.slice(22,-2)}
                  </p>
                  <p className="label-text-alt text-success text-lg">
                    {success}
                  </p>
                </label>
                <label className="label">
                  <p className="label-text-alt text-xl">
                    Already You have account ?{" "}
                    <Link className="text-warning" to="/user/login">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
