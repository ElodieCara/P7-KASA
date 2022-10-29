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
                            {/*    /!* <CardMedia image={house.cover} />*/}
                            {/*    <CardContent title={house.title} /> *!/*/}
                        </div>
                    </Link>
                    {/* <div className='card__image'>
                            <img src={house.cover} alt="" />
                        </div>
                        <div className="card__body">
                            <h2>{house.title}</h2>
                        </div> */}


                </div>
            ))}
        </div>
    );
};

export default Card;



// import React from 'react';
// // import "../styles/components/_cards.scss";

// const Card = ({ cover, title }) => {
//     return (
//         <div className='Card'>
//             <div className="Card__image">
//                 <img src={cover} alt="logement" />
//                 <h2>{title}</h2>
//             </div>

//         </div>
//     );
// };

// export default Card;

// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import logements from '../ressources/logements.json';

// const Card = () => {
//     // const [houses, setHouses] = useState([])

//     // useEffect(() => {
//     //     console.log(logements)
//     //     setHouses(logements)
//     // }, [])

//     //     return (
//     //         <div className='home-all-cards'>
//     //             {houses.map((house, id) => (
//     //                 <div className="card" key={id}>
//     //                     {/* <link className="card__link" to={`/logement/${house.id}`}> */}
//     //                     <div className='card__image'>
//     //                         <img src={house.cover} alt="" />
//     //                     </div>
//     //                     <div className="card__body">
//     //                         <h2>{house.title}</h2>
//     //                     </div>
//     //                     {/* </link> */}

//     //                     {/* <img src={house.cover} alt="" />
//     //                             <h2>{house.title}</h2> */}
//     //                     {/* <CardMedia image={house.cover} />
//     //                             <CardContent title={house.title} /> */}
//     //                     {/* </Card>
//     //                     </Link> */}
//     //                     {/* <div className='card__image'>
//     //                             <img src={house.cover} alt="" />
//     //                         </div>
//     //                         <div className="card__body">
//     //                             <h2>{house.title}</h2>z
//     //                         </div> */}


//     //                 </div>
//     //             ))
//     //             };
//     //         </div >
//     //     );
//     // }

//     export default Card;