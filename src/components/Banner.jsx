import React from 'react';
import banner from '../assets/banner'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="background bannière" className='banner__img' />
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;