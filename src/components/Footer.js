import React from 'react';
import Icon from '../assets/logo-icon.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__icon">
                <img src={Icon}/>
            </div>
            <div className="Footer__credits">
                <span>
                    This is app is powered by: 
                </span>
                <ul>
                    <li>Accuweather</li>
                    <li>Unsplash</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;