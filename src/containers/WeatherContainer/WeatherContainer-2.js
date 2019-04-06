import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import Input from '../../components/Input';
import Button from '../../components/Button'
import Hud from '../../components/Hud';
import Title from '../../components/Title';
import Dashboard from '../../components/Dashboard';
import axios from 'axios';


const WeatherContainer = (props) => {
    return (
        <Aux>
        <div 
        className="WeatherContainer"
        >
            <main>
                <Title text={props.title}/>
                <Input  id='search-bar' handleValue={props.queryHandle.bind(this)} placeText="Search Location"></Input>
                <Button click={props.sendQuery} style='Button' text="Search"/>
                <Hud date={props.date}></Hud>
        
            </main>
        </div>
        <Dashboard/>
        </Aux>
    );
};

export default WeatherContainer;