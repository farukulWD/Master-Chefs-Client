import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Component/Shared/Navigationbar';
import Footer from '../Component/Shared/Footer';

const ChefLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;