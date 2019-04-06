import React from 'react';
import Aux from '../hoc/Aux/Aux'
import MenuItem from '../components/MenuItem'


const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <MenuItem class='Menu-Item' text='Daily View'/>
                <MenuItem class='Menu-Item' text='Weekly View'/>
            </ul>
        </div>
    );
};

export default Menu;