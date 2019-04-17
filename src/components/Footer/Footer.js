import React from 'react';
import Icon from '../../assets/logo-icon.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__icon">
                <img src={Icon}/>
            </div>
            <div className="Footer__credits">
                <span>
                    This is app is powered by Accuweather &amp; Unsplash
                </span>
            </div>
        </div>
    );
};

export default Footer;