import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavigationBar from "../Component/Shared/Navigationbar";
import Footer from "../Component/Shared/Footer";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ChefLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
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

export default ChefLayout;
