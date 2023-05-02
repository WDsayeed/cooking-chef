import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import bgImg from '../../assets/24369199_G.jpg'

const Main = () => {
        return (
                <div>
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div>
        );
};

export default Main;