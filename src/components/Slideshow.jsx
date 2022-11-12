import React from 'react';
import { useState, useEffect } from "react";
import ArrowNext from '../assets/arrow-next.png'
import ArrowPrev from '../assets/arrow-prev.png'


const Slideshow = ({ images }) => {

    const [slides, setSlides] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideArrayLength = images.length

    useEffect(() => {
        setSlides(images)
        console.log(images)
    }, [images])

    const prevSlide = () => {
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
            </div>
            <span style={slideArrayLength > 1 ? { display: "block" } : { display: "none" }}
                className='container__slide__number'>
                {currentSlide + 1}/{slideArrayLength}
            </span>
        </div>
    );
};

export default Slideshow;