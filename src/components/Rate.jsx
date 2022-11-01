import React from 'react';
// import { useState } from "react";
// import logement from '../ressources/logements.json';
// import { Component } from "react";
import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as StarEmpty } from '../assets/star-empty.svg';
// import { Star } from '../assets/star.svg';
// import { StarEmpty } from '../assets/star-empty.svg';

function Rate({ scoreValue, careType }) {
    // const scoreValue = props.scoreValue;
    const ratingScore = [1, 2, 3, 5];

    // const scaleType = careType === 'color' ? { Star } : { StarEmpty };

    return (
        <div>
            {ratingScore.map((ratingElem) =>
                scoreValue >= ratingElem ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={Star} key={ratingElem.toString()} />
                ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={StarEmpty} key={ratingElem.toString()} />
                )
            )}
        </div>
    );
};

export default Rate;




// const Rate = () => {
// export default class Rating extends Component() {
//     render() {
//         const ratingScore = [1, 2, 3, 5];

//         return (
//             <div className="stars" >
//                 {
//                     ratingScore.map((stars) => (
//                         <Star className='Stars'
//                             fill={stars <= this.props.ratings ? "ff6060" : "#E3E3E3"}
//                             key={`star-${stars}`}
//                         ></Star>
//                     ))
//                 }
//             </div >
//         )
//     };
// }
// }

// export default Rate;

// class Rate extends Component() {
//         render() {
//             const ratingScore = [1, 2, 3, 5];
//             return (
//                 <div className="stars">
//                     {ratingScore.map((stars) => (
//                         <Star className=''
//                             fill={stars <= this.props.ratings ? "ff6060" : "#E3E3E3"}
//                             key={`star-${stars}`}
//                         ></Star>
//                     ))}
//                 </div>
//             )

//         }
//     }
//     export default Rate;

//         * {[...Array(5).map((stars) =>
//                 number >= stars ? (
//                     <img key={stars.toString()}
//                         src={Star} />

//                 ) : (
//                     <img key={stars.toString()}
//                         // src={Star} />
//                 )

//             )]} */}

//     }
//     );
// };

// export default Rate;