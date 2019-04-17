import React from 'react';
import LogoImg from '../../assets/logo.png'
import './Logo.scss'
const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={LogoImg}/>
        </div>
    );
};

export default Logo;