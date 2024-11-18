import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RighNavbar from '../components/layout-components/RighNavbar';
import CategoryNews from '../pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
    return (
        <div className='bg-slate-50 font-poppins'>
            <header><Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            </header>
            
            <section  className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </section>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
            <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
            <section className='col-span-6'><Outlet></Outlet></section>
            <aside className='col-span-3'><RighNavbar></RighNavbar></aside>
            
            </main>
        </div>
    );
};

export default Homelayout;