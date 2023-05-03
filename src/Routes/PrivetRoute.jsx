import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  if (loader) {
    return (
      <>
        <div style={style}>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          ;
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{ from: location }} to="/user/login" replace></Navigate>
  );
};

export default PrivetRoute;
