










// {/* {textEquipement}style={{ whiteSpace: "pre-wrap" }} */ }



// // const equipement = logement.equipments
// // let textEquipement = equipement.join('\n')






// import React, { useState, useRef, useEffect } from 'react';
// // import Icon from "../assets/arrow-top.png"


// function Collapse(props) {

//     const [visible, setVisible] = useState(false);

//     const [icon, updateIcon] = useState(0);
//     const [arrow, updateArrow] = useState('arrow-top')
//     //0 is top, down is 1

//     useEffect(() => {
//         updateIcon(0)
//     }, [])
//     useEffect(() => {
//         let classes = {
//             0: 'arrow top',
//             1: 'arrow down'
//         }
//         updateArrow(classes[icon])
//     }, [icon])

//     // const rotateIcon = (i) => {
//     //     updateIcon((i + 1) % 4 )
//     // }

//     // const scrollHeight = document.getElementById("content").scrollHeight;
//     const contentRef = useRef();

//     // if (contentRef.current)
//     //     console.log(contentRef.current.scrollHeight);


//     return (

//         <div className='collapse'>
//             <button className='collapse__toggle' onClick={() => setVisible(!visible)}>
//                 {props.label}
//                 <i className={arrow}></i>
//             </button>
//             <div
//                 className="collapse__content"
//                 ref={contentRef}
//                 style={
//                     visible ?
//                         {
//                             height: contentRef.current.scrollHeight + "px",
//                         }
//                         : {
//                             height: "0px"
//                         }
//                 }>
//                 <div className="collapse__content__text">{props.children}</div>
//             </div>
//         </div>
//     );
// }

// export default Collapse;