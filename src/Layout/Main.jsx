// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer';
import NavigationBar from '../Component/Shared/NavigationBar';

const Main = () => {
    return (
        <div className=''>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;