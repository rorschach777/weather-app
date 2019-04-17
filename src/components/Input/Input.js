import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import './Input.scss';


const Input = (props) => {
    return (
       <Aux>
          <input id={props.id} className="search-bar " onChange={props.handleValue} type="text" placeholder={props.placeText}/>
       </Aux>
    );
};

export default Input;