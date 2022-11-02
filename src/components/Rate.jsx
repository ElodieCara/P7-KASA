import React from 'react';
import Star from '../assets/star.svg';
import StarEmpty from '../assets/star-empty.svg';


function Rate({ scoreValue }) {

    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <div>
            {ratingScore.map((ratingElem) =>
                scoreValue >= ratingElem ? (

                    <img src={Star} key={ratingElem.toString()} alt='star full' />
                ) : (

                    <img src={StarEmpty} key={ratingElem.toString()} alt='star empty' />
                )
            )}
        </div>
    );
};

export default Rate;

