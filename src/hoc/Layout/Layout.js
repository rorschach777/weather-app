import React from 'react';
import Aux from '../Aux/Aux';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Main from '../../containers/Main/Main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Layout = () => {
    return (
        <BrowserRouter>
            <Aux>
                <Nav/>
                <Main/>
          
                <Footer/>
            </Aux>
        </BrowserRouter>
    );
};

export default Layout;