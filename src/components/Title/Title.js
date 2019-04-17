import React from 'react';
import './Title.scss';
const Title = (props) => {
    return (
        <div>
            <h2 className="Title">{props.text}</h2>
        </div>
    );
};
export default Title;