
//---------------- Logo fonctionnel --------------

import logo from '../assets/logo.png'

function Logo() {
    return (
        <div className='header__logo'>
            <img src={logo} alt='logo Kasa' className='logo' />
        </div>
    )
}

export default Logo

//---------------- Import publics --------------

// import React from 'react';

// function Banner() {
//     return (
//         <div className='logo-banner'>
//             {/* où alors : les images importées depuis la balise IMG sont accessibles dans "publics" */}
//             <img src="" alt="logo Kasa" className='logo-banner' />
//         </div>
//     );
// }

// export default Banner;

//---------------- Import assets --------------
// import React from 'react';
// import logo from '../assets/logo.png';
// // // import '../styles/components/logo'

// function Banner() {
//     return (
//         <div className='logo-banner'>
//             <img src="{logos}" alt="logo Kasa" className='logo-banner' />
//         </div>
//     )
// }

// export default Banner

//---------------- Import require --------------

// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='logo-banner'>
//             <img src="{require('../assets/logo.png')" alt="logo Kasa" className='logo-banner' />
//         </div>
//     );
// };

// export default Banner;

