import React from 'react';
import icon from '../assets/icon.png'
const Hud = (props) => {
    return (
        <div className="hud">
            <div>
                <span className="hud__temperature">{props.currentTemp}</span>
                <span className="hud__degree-icon">
                    <svg height="100%" width="100">
                        <circle cx="40" cy="40" r="15" stroke="white" strokeWidth="3" fill="unset" fillOpacity="0" />
                    </svg>
                </span>
                <div className="hud__icon-date">
                    <div>
                        <i className={props.icon}></i>
                    </div>
                    <span className="hud__date">
                       {props.date}
                    </span>
                </div>
         
            </div>
        </div>
    );
};

export default Hud;