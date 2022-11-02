import React from 'react';

function Tags(props) {
    return (
        <div className='tagline'>
            <span>{props.tag}</span>
        </div>
    );
};

export default Tags;



// import React from 'react';

// class Tags extends React.Component {

//     render() {
//         const { tagText } = this.props
//         return (
//             <div className='tagline'> {tagText} </div>
//         )
//     }
// }

// export default Tags

// // function Tags() {
// //     return (
// //         <ul>
// //             {tags.map((tag, index) => (
// //                 <li key={`${tag}-${index}`}>{tag}</li>
// //             )
// //             )}
// //         </ul>
// //     )
// // };

// // export default Tags;


// // // import { Component } from "react";

// // // class Tags extends Component {
// // //     render() {
// // //         return (
// // //             <ul>
// // //                 {this.props.tags.map((tag, index) => {
// // //                     return <li className='tag' key={index}>{tag}</li>;
// // //                 })}
// // //             </ul>
// // //         );
// // //     };
// // // };

// // // export default Tags;


//    // const tags = [(logement.tags)]
//     // const listTags = tags.map((tags, index) =>
//     //     <li key={`${tags}-${index}`}>{tags}</li>
//     // );