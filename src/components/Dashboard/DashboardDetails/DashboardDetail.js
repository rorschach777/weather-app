import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {Route, Link} from 'react-router-dom';
import './DashboardDetail.scss'
const DashboardDetail = (props) => {
    console.log(`DASHBOARD DETAIL CLASS: ${props.dayIcon}`)
    return (
        <Aux>
            {/* Day Time Forecast */}
            <div className='dashboard-detail-item'>
                <div className='dashboard-detail-item__feature'>
                    <span className={`${props.dayIcon}`}></span>
               
                </div>
                <div className='dashboard-detail-item__content'>
                <h5>Day Time Forecast</h5>
                <p> Expect conditions to be mostly {props.day}</p>
                </div>
            </div>
            {/* Night Time Forecast */}
            <div className='dashboard-detail-item'>
                <div className='dashboard-detail-item__feature'>
                <span className={`${props.nightIcon}`}></span>
               
                </div>
                <div className='dashboard-detail-item__content'>
                    <h5>Night Time Forecast</h5>
                    <p>Expect conditions to be mostly {props.night}</p>
                </div>
            </div>
            {/* Temperature Range */}
            <div className='dashboard-detail-item'>
                <div className='dashboard-detail-item__feature'>
                    <span>{props.min}</span>
                    <span>{props.max}</span>
                </div>
                <div className='dashboard-detail-item__content'>
                    <h5>Day &amp; Night Temperatures</h5>
                    <p>Temperatures for today will range from {props.min}F to {props.max}F.</p>
                </div>
            </div>
        </Aux>
    );
};

export default DashboardDetail;