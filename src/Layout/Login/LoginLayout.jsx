import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../Component/Shared/Footer";
import NavigationBar from "../../Component/Shared/Navigationbar";
import { Circles } from "react-loader-spinner";
const style = { position: "fixed", top: "20%", left: "50%", transform: "translate(-50%, -50%)" };

const LoginLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={style}>
        {navigation.state === "loading" && (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
