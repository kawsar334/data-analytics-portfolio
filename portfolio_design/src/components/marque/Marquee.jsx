import React from "react";

import "./Marquee.css"
const Marquee = () => {
    return (
        <div className="relative bg-gradient-to-r from-transparent  text-white py-4 ">
            {/* Marquee Wrapper */}
            <div className="overflow-hidden w-[70%]  m-auto">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-10">
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                       **Web Design*
                    </span>
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                       * UI/UX*
                    </span>
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                        *Frontend Development*
                    </span>
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                        *React.js*
                    </span>
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                        *Tailwind CSS*
                    </span>
                    <span className="text-lg lg:text-2xl font-bold uppercase">
                        *Full-Stack Development*
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
