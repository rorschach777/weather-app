import React, { Component } from 'react';

import {WeatherContainer} from '../WeatherContainer/WeatherContainer';
import {withRouter} from 'react-router-dom';
import {Error} from '../../components/Error/Error'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundImageURL: null,
            error: false
    
        } 
    }

    setBackgroundImage = (q) => {
        this.setState({
            backgroundImageURL: q
     
        })
    }
    returnState=()=>{
        console.log(`Return State : ${this.state.error}`)
        return this.state.error
        
    }
    throwErrorDialog = () => {
        this.setState({error: true})
    }

    componentDidUpdate(){
        console.log(this.state)
    }
    toggleError = () => {
        this.setState({
          show: !this.state.error
        });
    };
    closeError = () => {
        this.setState({ error: false });
    };
    render() {
        return (
 
                <div className="Main" style={{backgroundImage: `url(${this.state.backgroundImageURL})` }} >
                    <Error 
                    heading='Please Enter A City Name'
                    message='You have to enter a city before results will be shown.'
                    buttonText='Ok, Got it'
                    error={this.state.error}
                    close={this.closeError}
                    />
                    <WeatherContainer 
                    setBackground={(q)=>this.setBackgroundImage(q)}
                    throwError={this.throwErrorDialog}
                    />
      
                </div>
                
   
        );
    }
}

export default withRouter(Main);