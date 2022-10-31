import React from 'react';
// import { useParams } from "react-router-dom";
// import logements from '../ressources/logements.json';
import { useState, useEffect } from "react";
import ArrowNext from '../assets/arrow-next.png'
import ArrowPrev from '../assets/arrow-prev.png'


const Slideshow = ({ images }) => {
    // const { id } = useParams();
    // console.log(id)

    const [slides, setSlides] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideArrayLength = images.length

    useEffect(() => {
        setSlides(images)
        console.log(images)
    }, [images])

    const prevSlide = () => {
        // if (currentSlide === 0) {
        //     setCurrentSlide(images.length)
        // } else {
        //     setCurrentSlide(currentSlide - 1)
        // }
        // setCurrentSlide()
        setCurrentSlide(currentSlide === 0 ? slideArrayLength - 1 : currentSlide - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideArrayLength - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className='container__slide'>
            {slideArrayLength > 1 && (
                <img className='container__slide__arrow--prev' src={ArrowNext} alt="flèche photos suivante" onClick={nextSlide} />
            )}
            {slideArrayLength > 1 && (
                <img className='container__slide__arrow--next' src={ArrowPrev} alt="flèche photos précédente" onClick={prevSlide} />
            )}
            <div className="container__slide__image">
                <img src={slides[currentSlide]} alt="photos logements" />
                <span className='container__slide__image-number'>
                    {currentSlide + 1}/{slideArrayLength}
                </span>
            </div>




            {/* <div>
                {slides.map((slide, index) => (
                    <div className="container__slide__image" key={index}>
                        <div style={{ 'backgroundImage': `${slide}` }}>
                            {/* <span>{slides.pictures}</span> */}
            {/* <img src={slide} alt="" />
                        </div>
                    </div>

                ))}
            </div> */}
            {/* <img width={500} src={data} /> */}
            {/* <img width={500} src={data?.message} /> */}
            {/* <div slides={JSON.stringify(pictures)} /> */}
        </div>
    );
};

export default Slideshow;

// // async function fetchData() {
// //     const res = await fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
// //     res
// //         .json()
// //         .then(res => setPictures(res))
// //     // .catch(err => ());
// // }

// // useEffect(() => {
// //     fetchData();
// // }, []);



// // const Slideshow = ({ data }) => {
// //     const { slide } = useParams();
// //     return (
// //         // <div>
// //         //     {data.filter((list) => list.slide === slide)}
// //         //     .map((list) => (
// //         //     <div className="container__slide" key={list.id}>

// //         //         <i></i>
// //         //     </div>

// //             // ))

// // //         </div>
// //     );
// // };

// // export default Slideshow;