import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt='logo Kasa' className='logo' />
            </div>
            <div className='header__navigation'>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>à propos</li>
                    </NavLink>
                </ul>
            </div>
            {/* <div className='body__banner'>
                {/* <img src={banner} alt="background bannière" className='banner__img' /> */}
            {/* <h1 className='body__banner__title'>Chez vous, partout et ailleurs</h1> */}
            {/* </div> * /} */}
        </div >
    );
};

export default Header;