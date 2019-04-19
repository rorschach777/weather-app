import React, { Children } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';
import posed from 'react-pose'
import {NavLink} from 'react-router-dom';

const MenuCon = posed.ul({
    open: {
        y: '0%',
        delayChildren: 50,
        staggerChildren: 50
    },
    closed: {
        y: '-200%',
        delay: 50
    }
})
const MenuLi = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: -500, opacity: 0 }
})


const Menu = (props) => {
    return (
        <div className="Menu">
            <div className="Menu__mobile">
                <span>Menu</span>
                <div onClick={props.click} className={props.menuState ? 'burger burger--open' :  'burger burger--closed'}>
                        <span id='burger-menu--1' className="burger-menu "></span>
                        <span id='burger-menu--2' className="burger-menu"></span>
                        <span id='burger-menu--3' className="burger-menu "></span>
                    </div>
            </div>
            <MenuCon
            pose={props.menuState ? 'open' : 'closed'}
            className={props.menuState ? '' : 'hide'}
            >
                <MenuLi>
                    <NavLink 
                    to='/daily-view'  
                    exact 
                    className='Menu-Item'
                    activeClassName='active'
                    onClick={props.click}
                    >
                    Daily View
                    </NavLink>
                </MenuLi>
            
                <MenuLi>
                    <NavLink 
                    to='/weekly-view' 
                    exact  
                    className='Menu-Item'
                    activeClassName='active'
                    onClick={props.click}
                    >
                    Weekly View
                    </NavLink>
                </MenuLi>
       
            </MenuCon>
        </div>
    );
};

export default Menu;