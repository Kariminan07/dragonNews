import React from 'react';
import Header from '../components/Header';
import RighNavbar from '../components/layout-components/RighNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
        <div className='bg-slate-50 font-poppins'>
            <header><Header></Header>
            </header>

            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <section className='col-span-9'><h2 className='font-semibold mb-3'>Dragon News</h2>

                    <div className="card bg-white  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'><RighNavbar></RighNavbar></aside>

            </main>
        </div>
    );
};

export default NewsDetails;