import React from 'react';
import './DashboardDailyItem.scss';

const DashboardDailyItem = (props) => {

    return (
        <div className='dashboard-daily-item'>
            <div className="row">
                <h6>{props.header}</h6>
            </div>
     
            <div className="row dashboard-daily-item__snapshot">
                {/* <div className="dashboard-daily-item__snapshot__temp">%TEMP%</div>
                <div className="dashboard-daily-item__snapshot__icon">%ICON%</div> */}
                <div className="dashboard-daily-item__snapshot__temp">{props.temp}</div>
                <div className="dashboard-daily-item__snapshot__icon">
                    <span className={`${props.iconText}`}></span>
                </div>
            </div>
            <div className="row">
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default DashboardDailyItem;