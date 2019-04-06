import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import Input from '../../components/Input';
import Button from '../../components/Button'
import Hud from '../../components/Hud';
import Title from '../../components/Title';
import Dashboard from '../../components/Dashboard';
import axios from 'axios';
import apiKeys from '../../data/apiKeys'

class WeatherContainer extends Component {
    state = {
      city: 'San Francisco',
      date:  'Thursday March 26 2019',
      query: null,
      updatedQuery: true,
      backgroundImageURL: null
    }
    
    /// this is for dev only
    showUpdatedState=()=>{
        // console.log(this.state)
    }
    todaysDate=()=>{
        let today =  new Date();
        return today;

    }
    queryHandler=()=>{
       let searchBar =  document.getElementById('search-bar');
       let query = searchBar.value
       return query;
    }
    sendQuery=()=>{
        let receivedQuery = this.queryHandler();
        this.setState({
            query: receivedQuery,
            city: receivedQuery
        }, this.showUpdatedState);
    }
    componentDidMount(){

        console.log(`COMPONENT DID MOUNT ${this.state.updatedQuery}`  )
    }
    componentWillUpdate(){

        /// This is fetching the weather information
   
        // axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKeys.accuWeather}&q=${this.state.city}&details=true`)
        // .then((response)=>{
        //     // show the correct city is being queried
        //     console.log(response);
        //     // get city key from accuweather
        //     let city = response.data[0].Key
    
        //     // use the city key to query the 5 day forcast
        //     return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${apiKeys.accuWeather}`);
        // })
        // .then((response)=>{
        //   // log the 5 day forecast for the city
        //   console.log(response)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });

        // This is fetching the image from unsplash


        if(this.state.updatedQuery){
            axios.get(`https://api.unsplash.com/search/photos/?count=1&orientation=landscape&query=${this.state.city}&client_id=${apiKeys.unsplash}`)
            .then(response=> {
                let background = `${response.data.results[0].urls.full}`
                // console.log(background);
                this.setState({
           
                    backgroundImageURL: background
    
                
                })
           
            })
            .then(response=>{
                this.setState({
                    updatedQuery: false
                })
            })
        }
        console.log(this.state.updatedQuery)
        console.log(this.state.backgroundImageURL);
    }
    render() {
  
        return (
            <Aux>
            <div 
            className="WeatherContainer"
            >
                <main>
                    <Title text={this.state.city}/>
                    <Input  id='search-bar' handleValue={this.queryHandler.bind(this)} placeText="Search Location"></Input>
                    <Button click={this.sendQuery} style='Button' text="Search"/>
                    <Hud date={this.state.date}></Hud>
            
                </main>
            </div>
            <Dashboard/>
            </Aux>
        );
    }
}

export default WeatherContainer;