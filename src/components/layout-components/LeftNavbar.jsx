import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))

    },[]);
    return (
        <div>
            <h2 className='font-semibold text-black'>All Caterogy ({categories.length})</h2>
            <div className='flex flex-col gap-2 py-6  '>
                {
                    categories.map((category) => (<NavLink  
                     to={`/category/${category.category_id}`} className='btn hover:bg-zinc-200  text-white font-semibold' key={category.category_id} > {category.category_name}</NavLink >))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;