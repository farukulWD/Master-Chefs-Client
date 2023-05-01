// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Component/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;