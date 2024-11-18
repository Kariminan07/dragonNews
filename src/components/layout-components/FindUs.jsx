import React from 'react';
import { FaGoogle,FaGithub,FaFacebook, FaInstagram} from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaGoogle/> Google</button>
                <button className="btn join-item justify-start" ><FaGithub/> Github</button>
                <button className="btn join-item justify-start" ><FaFacebook/> Facebook</button>
                <button className="btn join-item justify-start" ><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;