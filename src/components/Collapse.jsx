// // import React from 'react';

// // function Collapse() {
// //     return(
// //         <div className="container__dropdowns">
// //             <Collapse>
// //             Collapse.Panel

// //             </Collapse>

// //         </div>
// //     )
// // }

// // export default collapse;

/*------------------------------------------------------------------- */

// // import { getByTitle } from '@testing-library/react';

// import React, { useState } from 'react';

// function Collapse() {

//     const [visibleA, setVisibleA] = useState(false);
//     const [visibleB, setVisibleB] = useState(false);
//     const [visibleC, setVisibleC] = useState(false);
//     const [visibleD, setVisibleD] = useState(false);

//     return (
//         <div className="container__dropdowns">
//             <div className="dropdown">
//                 <button onclick={() => setVisibleA(!visibleA)}>title</button>
//                 <button onclick={() => setVisibleB(!visibleB)}>title</button>
//                 <button onclick={() => setVisibleC(!visibleC)}>title</button>
//                 <button onclick={() => setVisibleD(!visibleD)}>title</button>
//                 <button onclick={() => {
//                     setVisibleA(!visibleA)
//                     setVisibleB(!visibleB)
//                     setVisibleC(!visibleC)
//                     setVisibleC(!visibleD)
//                 }}>
//                     Toggle elements
//                 </button>
//                 <Collapse visible={visibleA}>
//                     <div className="dorpdown__card">
//                         <h3 className="dropdown__card__title-A">Fiabilité</h3>
//                         <div className='dropdown__card__body'>
//                             None
//                         </div>

//                     </div>
//                 </Collapse>
//                 <Collapse visible={visibleB}>
//                     <div className="dorpdown__card">
//                         <h3 className="dropdown__card__title-B">Respect</h3>
//                         <div className='dropdown__card__body'>
//                             La bienveillance fait partie des valeurs fondatrices de Kasa.
//                             Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
//                         </div>

//                     </div>
//                 </Collapse>
//                 <Collapse visible={visibleC}>
//                     <div className="dorpdown__card">
//                         <h3 className="dropdown__card__title-C">Service</h3>
//                         <div className='dropdown__card__body'>
//                             None
//                         </div>

//                     </div>
//                 </Collapse>
//                 <Collapse visible={visibleD}>
//                     <div className="dorpdown__card">
//                         <h3 className="dropdown__card__title-D">Responsabilité</h3>
//                         <div className='dropdown__card__body'>
//                             None
//                         </div>

//                     </div>
//                 </Collapse>



//             </div>
//         </div>
//     );

// }

// export default Collapse;

/*------------------------------------------------------------------- */

import React, { useState, useRef } from 'react';
import Icon from "../assets/arrow-top.png"


function Collapse(props) {
    const [visible, setVisible] = useState(false);

    // const scrollHeight = document.getElementById("content").scrollHeight;
    const contentRef = useRef();

    // const visibleState = () => {
    //     setVisible(!visible);
    // }
    // {visibleState}

    // if (contentRef.current)
    //     console.log(contentRef.current.scrollHeight);

    return (

        <div className='collapse'>
            <button className='collapse__toggle' onClick={() => setVisible(!visible)}>
                {props.label}
                <img
                    className="collapse__toggle__icon"
                    src={Icon}
                    alt="Icon flèche"
                    style={visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg' }} />
            </button>
            <div
                className="collapse__content"
                ref={contentRef}
                style={visible ? { height: contentRef.current.scrollHeight + "px", } : { height: "0px" }}>
                <div className="collapse__content__text">{props.children}</div>
            </div>
        </div>
    );
}

export default Collapse;