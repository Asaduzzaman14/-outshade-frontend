import React from 'react';
import bannerimg from "../Assets/sample-1.jpg"


const Banner = () => {
    return (
        <div className='min-w-full'>
            <img className='mx-auto w-100' src={bannerimg} alt="" />
        </div>
    );
};

export default Banner;