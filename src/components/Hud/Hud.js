import React from 'react';
import icon from '../../assets/icon.png'
import './Hud.scss'
const HudIcon = ()=>{
    return 'X'
}
const Hud = (props) => {
    return (
        <div className="Hud">
            <div>
                <span className="Hud__temperature">{props.currentTemp}</span>
                <span className="Hud__degree-icon">
                    <svg height="100%" width="100">
                        <circle cx="40" cy="40" r="15" stroke="white" strokeWidth="3" fill="unset" fillOpacity="0" />
                    </svg>
                </span>
                <div className="Hud__icon-date">
                    <div>
                        <i className={props.icon}></i>
                    </div>
                    <span className="Hud__date">
                       {props.date}
                    </span>
                </div>
         
            </div>
        </div>
    );
};
export default Hud;
