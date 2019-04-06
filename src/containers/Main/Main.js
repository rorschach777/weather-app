import React, { Component } from 'react';

import {WeatherContainer} from '../WeatherContainer/WeatherContainer'

class Main extends Component {
    state = {
        backgroundImageURL: null,
    } 
    setBackgroundImage = (q) => {
        this.setState({
            backgroundImageURL: q
        })
    }
    render() {
        return (
            <div className="Main" style={{backgroundImage: `url(${this.state.backgroundImageURL})` }} >
                <WeatherContainer setBackground={(q)=>this.setBackgroundImage(q)}/>
            </div>
        );
    }
}

export default Main;