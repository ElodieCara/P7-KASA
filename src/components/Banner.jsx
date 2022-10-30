import React from 'react';
// import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='banner__home banner__about'>
            {/* <img src={banner} alt="background bannière" className='banner__img' /> */}
            <h1 className='banner__home__title banner__about__title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

// const Banner = (props) => {
//     const imageBanner = props.imageBanner
//     return (
//         <div className='banner__home banner__about'>
//             <img src={props.imageBanner} alt="background bannière" className='banner__img' />
//             <h1 className='banner__home__title banner__about__title'>Chez vous, partout et ailleurs</h1>
//         </div>
//     );
// };

export default Banner;