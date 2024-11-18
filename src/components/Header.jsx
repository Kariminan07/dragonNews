import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
           <div className='flex flex-col justify-center items-center gap-2 py-3 text-black'>
            <img className='w-[200px]' src={logo} alt="" />
            <h2 className='font-poppins'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            <p>{moment().format('dddd, MMMM Do YYYY,')}</p>
           </div>
        </div>
    );
};

export default Header;