import React from 'react';

const Cards = ({ cover, title }) => {

    return (
        <div className='card__image'>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </div>
    );
};

export default Cards;