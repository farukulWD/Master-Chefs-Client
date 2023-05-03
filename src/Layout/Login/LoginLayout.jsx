import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Shared/Footer';
import NavigationBar from '../../Component/Shared/Navigationbar';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;