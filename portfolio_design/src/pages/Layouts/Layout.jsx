import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from '../../components/Footer';
import { ThemeContext } from '../../context/ThemeContext';
import Navbar2 from '../../components/navbar2/Navbar2';
const Layout = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: "ease-in-out",
            delay: 100,
        });
    }, []);

    return (
        <div className={`overflow-x-hidden ${darkMode ? "bg-slate-950 text-white" : "bg-white text-black "}`}>
            {/* <Navbar /> */}
            <Navbar2/>


            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;
