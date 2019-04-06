import React from 'react';
import Aux from '../hoc/Aux/Aux'

const MenuItem = (props) => {
    return (
        <Aux>
            <li className={props.class}>{props.text}</li>
        </Aux>
    );
};

export default MenuItem;