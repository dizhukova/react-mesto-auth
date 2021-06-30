import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
    return (
    <header className="header">
        <a href="#" target="_blank">
            <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
            </a>
    </header>
    )
}

export default Header;