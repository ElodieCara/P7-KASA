import React from 'react';
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className='logo-banner'>
            {/*Les images importées depuis la balise IMG sont accessibles dans "publics" */}
            <img src="{logo}" alt="logo Kasa" className='logo-banner' />
        </div>
    );
}

export default Banner;

// import logo from '../assets/LOGO.png';
// import '../styles/Banner.css'

// function Banner() {
//     return (
//         <div className='logo-banner'>
//             <img src="{logo}" alt="logo Kasa" className='logo-banner' />
//         </div>
//     )
// }

// export default Banner