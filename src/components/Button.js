import React from 'react';
import Aux from '../hoc/Aux/Aux'

const Button = (props) => {
    return (
        <Aux>
            <a onClick={props.click} className={props.classes}>{props.text}</a>
        </Aux>
    );
};

export default Button;