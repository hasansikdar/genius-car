import React from 'react';
import Header from '../Pages/Share/Header/Header';
import Footer from '../Pages/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;