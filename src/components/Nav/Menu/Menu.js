import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

import {Route, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="Menu">
            <ul>

                <NavLink to='/daily-view' exact activeClassName='active'>
                    <MenuItem class='Menu-Item' text='Daily View'/>
                </NavLink>
                <NavLink to='/weekly-view' exact activeClassName='active'>
                    <MenuItem class='Menu-Item' text='Weekly View'/>
                </NavLink>
            
            </ul>
        </div>
    );
};

export default Menu;