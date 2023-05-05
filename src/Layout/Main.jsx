// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Component/Shared/Footer";
import NavigationBar from "../Component/Shared/NavigationBar";
import { Circles } from "react-loader-spinner";
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="">
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

export default Main;
