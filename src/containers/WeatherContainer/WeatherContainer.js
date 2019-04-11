import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import Input from '../../components/Input';
import Button from '../../components/Button'
import Hud from '../../components/Hud';
import Title from '../../components/Title';
import Dashboard from '../../components/Dashboard/Dashboard';
import axios from 'axios';

import {Route, Switch} from 'react-router-dom';

export class WeatherContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: 'Enter Your City',
            searched: false,
            fiveDayForecast: null,
            currentTemp: null,
            date: 'March 30 2018',
            todayIcon: null,
            query: null,
            updatedQuery: true,
        }
    }
    getTodaysDate = ()=> {
        let date = Date.now()
        return date;
    }
    showUpdatedState=()=>{
        // console.log(`----SHOW UPDATED STATE:---`)
        // console.log(this.state)
    }
    todaysDate=()=>{
        let today =  new Date();
        return today;

    }
    queryHandler=()=>{
       let searchBar =  document.getElementById('search-bar');
       let query = searchBar.value;
    
        return query;

    }
    sendQuery=()=>{
          let updatedQuery = this.queryHandler();

          console.log(updatedQuery)
          if (updatedQuery === ''){
              this.props.throwError();
              return;
          }
          else {
            this.setState({
                updatedQuery: !this.state.updatedQuery,
                searched: true,
                query: updatedQuery,
                city: updatedQuery
            }, this.showUpdatedState);

          }
    }
    formatCity = () => {
        let cityArr = this.state.city.split(' ')
        let transformedCity = []
       
        for (let i = 0; i < cityArr.length; i++){
            let capitalLetter = cityArr[i].charAt(0).toUpperCase();
            let restOfWord = cityArr[i].slice(1)
            let transformedWord = `${capitalLetter}${restOfWord}`
            transformedCity.push(transformedWord)
        }
        let str = transformedCity.join(' ')
        return str;
    }
    switchIcon = (iconPhrase) => {
        if (this.state.searched){
        let i = iconPhrase.toLowerCase();
        // console.log(`PHRASE: ${i}`)
            switch (i){
                case 'sunny':
                return 'wi wi-day-sunny';
                break;
                case 'sostly sunny':
                return 'wi wi-day-sunny';
                break;
                case 'partly sunny':
                return 'wi wi-day-cloudy';
                break;
                case 'thunderstorms':
                return 'wi wi-day-thunderstorm';
                break;
                case 'mostly cloudy w/ t-storms':
                return 'wi wi-thunderstorm';
                break;
                case 'mostly cloudy':
                return 'wi wi-cloud';
                break;
                case 'partly sunny w/ t-storms':
                return 'wi wi-day-thunderstorm';
                break;
                case 'rain and snow':
                return 'wi wi-rain-mix';
                break;
                case 'rain':
                return 'wi wi-sprinkle';
                break;
                case 'snow':
                return 'wi wi-snow';
                break;
                case 'showers':
                    return 'wi wi-showers';
                    break;
                case 'intermittent clouds':
                    return 'wi wi-day-cloudy-high';
                    break;
                default: 
                return 'wi wi-day-sunny';
                break;
            }
        }
        else {
        return;
        }
      
    }

    componentDidMount(){
        // let date = this.getTodaysDate();
        this.setState({
            city: 'San Francisco',
     
        })
        window.addEventListener('keypress', (e)=>{
            if (e.keyCode === 13){
               this.sendQuery()
            }
            else {

            }
        })
    }
    formatDate(d){
        let dArr = d.split(' ');
        const findMonth = (d)=>{
            switch(d){
                case 'Jan':
                return 'January';
                break;
                case 'Feb':
                return 'February';
                break;
                case 'Mar':
                return 'March';
                break;
                case 'Apr':
                return 'April';
                break;
                case 'May':
                return 'May';
                break;
                case 'Jun':
                return 'June';
                break;
                case 'Jul':
                return 'July';
                break;
                case 'Aug':
                return 'August';
                break;
                case 'Sep':
                return 'September';
                break;
                case 'Oct':
                return 'October';
                break;
                case 'Nov':
                return 'November';
                break;
                case 'Dec':
                return 'December';
                break;
            }
        }
        let month = findMonth(dArr[1]);
        let day = dArr[2];
        let year = dArr[3];
        let formattedDate = `${month} ${day} ${year}`
        return formattedDate
    }

    componentWillUpdate(){
        // console.log(`COMPONENT WILL UPDATE ${this.state.updatedQuery}`)
        let accuKey = null
        let unsplashKey  = null
        
          /// This is fetching the weather information

        // ACCUWEATHER
        if(this.state.updatedQuery){

          axios.get('https://weather-app-8eef1.firebaseio.com/ApiKeys/Accu.json')
          .then((response)=>{
            accuKey = response.data
          })
          .then(response=>{
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuKey}&q=${this.state.city}&details=true`)
            
            .then((response)=>{
                // show the correct city is being queried
                //   console.log(response);
                // get city key from accuweather
                let city = response.data[0].Key
        
                // use the city key to query the 5 day forcast
                return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${accuKey}`);
            })
            .then((response)=>{
                // log the 5 day forecast for the city
                // console.log(response);
                let fiveDayForecast = response.data.DailyForecasts
                return fiveDayForecast;
                // let curTemp = response.data.DailyForecasts[0].Temperature.Maximum.Value
                // return curTemp;
        
            })
            .then((response)=>{
                this.setState({
                    fiveDayForecast: response,
                    todayIcon: response[0].Day.IconPhrase,
                    currentTemp: response[0].Temperature.Maximum.Value
                })
                //   console.log(`RECEIVED TEMPERATURE : ${response}`)
                // this.setState({
                //     currentTemp: response
                // })
            }, this.showUpdatedState)
            .catch((error)=>{
                //   console.log(error)
            });
          })
          ////////
          axios.get('https://weather-app-8eef1.firebaseio.com/ApiKeys/unsplash.json')
          .then(response=>{
            unsplashKey = response.data
            })
          .then(response=>{
            axios.get(`https://api.unsplash.com/search/photos/?count=1&orientation=landscape&query=${this.state.city}&client_id=${unsplashKey}`)
            .then(response=> {
                let background = `${response.data.results[0].urls.full}`
                this.props.setBackground(background);
                // console.log(background);
            })
            .then(response=>{
                this.setState({
                    updatedQuery: false
                    
                })
            })
            .catch((error)=>{
                //   console.log(error)
                // set to a generic photo of time of
                let background = `https://images.unsplash.com/photo-1489537235181-fc05daed5805?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU5NzA0fQ`
                this.props.setBackground(background)
            })
          })

        }
      
    }
    componentDidUpdate(){
        if(this.state.updatedQuery){
            this.setState({updatedQuery: !this.state.updatedQuery});
        }
   
        // console.log(`ComponentDidUpdate ${this.state.updatedQuery}`);
        // console.log(`ComponentDidUpdate ${this.state}`)
    }
    render() {
        let today = this.formatDate(Date())
        let searchedCity = this.formatCity();
        return (
            <Aux>
            <div 
            className="WeatherContainer"
            >
                <main>
                    <Title text={searchedCity}/>
                    <Input  id='search-bar' handleValue={this.queryHandler.bind(this)} placeText="Search Location"></Input>
                    <Button click={this.sendQuery} classes='Button' text="Search"/>
                  
                    <Hud 
                    icon={this.switchIcon(this.state.todayIcon)}
                    currentTemp={this.state.currentTemp}
                    date={today}
                    ></Hud>
            
                </main>
            </div>
   

            { this.state.searched ?
            <Dashboard
            
            formatDate={this.formatDate}
            fiveDayForecast={this.state.fiveDayForecast}
            /> 
            : null
            }

            </Aux>
        );
    }
}

