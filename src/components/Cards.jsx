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

 // const [houses, setHouses] = useState([])

    // useEffect(() => {
    //     console.log(logements)
    //     setHouses(logements)
    // }, [])

 // <div className='home-all-cards'>
        //     {houses.map((house, id) => (
        //         <div className="card" key={id}>
        //             <Link className="card__link" to={`/logement/${house.id}`}>
        //                 <div className='card__image'>
        //                     <img src={house.cover} alt={house.title} />
        //                     <h2>{house.title}</h2>
        //                 </div>
        //             </Link>

        //         </div>
        //     ))}
        // </div>


