import React from 'react';
import LogoFooter from '../assets/logo-N&B.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__logo">
                <img src={LogoFooter} alt="Logo Kasa" />
            </div>
            <span className='footer__text'>
                © 2020 Kasa. All rights reserved
            </span>
        </footer>
    );
};

export default Footer;