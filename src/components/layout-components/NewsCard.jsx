import React from 'react';
import { AiOutlineShareAlt, AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const { singleNews } = props || {};
    const {
        title,
        thumbnail_url,
        published_date,
        details,
        total_view,
        rating
    } = singleNews;

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src={singleNews.author.img}
                        alt={singleNews.author.name}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="text-gray-800 font-semibold">{singleNews.author.name}</p>
                        <p className="text-gray-500 text-sm">{new Date(published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <AiOutlineShareAlt size={20} />
                </button>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 text-sm mb-3">{details.substring(0, 150)}... <Link to={`/news/${singleNews._id}`} className="text-blue-500 cursor-pointer">Read More</Link></p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <AiFillStar size={20} className="text-yellow-500 mr-1" />
                    <p className="text-gray-700 font-semibold">{rating.number}</p>
                </div>
                <div className="flex items-center text-gray-600">
                    <AiOutlineEye size={20} className="mr-1" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
