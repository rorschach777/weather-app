import React from 'react';
import Menu from './Menu/Menu';
import Logo from '../Logo/Logo';
import './Nav.scss'

const Nav = () => {
    return (
        <div className="nav">
            <Logo/>
            <Menu/>

        </div>
    );
};

export default Nav;