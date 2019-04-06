import React from 'react';

const DashboardItem = (props) => {
    return (
        <div className="Dashboard-Item">
            {props.text}
        </div>
    );
};

export default DashboardItem;