import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logements from '../ressources/logements.json';

const Card = () => {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        console.log(logements)
        setHouses(logements)
    }, [])

    return (
        <div className='home-all-cards'>
            {houses.map((house, id) => (
                <div className="card" key={id}>
                    <Link className="card__link" to={`/logement/${house.id}`}>
                        <div className='card__image'>
                            <img src={house.cover} alt={house.title} />
                            <h2>{house.title}</h2>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    );
};

export default Card;


