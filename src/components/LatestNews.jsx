import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-100 p-2">
            <p className="bg-[#D72050] text-base-400 text-xl px-3 py-1">Latest</p>
             <Marquee pauseOnHover={true} speed={50} className=" space-x-10">
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora?
                </Link>
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora?
                </Link>
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora?
                </Link>
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora?
                </Link>
             </Marquee>
        </div>
    );
};

export default LatestNews;