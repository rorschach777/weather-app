import React from 'react';
import Aux from '../Aux/Aux';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Main from '../../containers/Main/Main';


const Layout = () => {
    return (
        <Aux>
            <Nav/>
            <Main/>
            <Footer/>
        </Aux>
    );
};

export default Layout;