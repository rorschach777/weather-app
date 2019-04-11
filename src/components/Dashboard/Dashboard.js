import React from 'react';


import DashboardDailyItem from './DashboardDailyItems/DashboardDailyItem';
import DashboardDetail from './DashboardDetails/DashboardDetail';

import Footer from '../Footer';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const Dashboard = (props) => {
    const switchIcon = (iconPhrase) => {
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

    const fiveDayForecast = props.fiveDayForecast.map((cur, idx)=>{
        let iconPhrase = cur.Day.IconPhrase
        let phraseToClassName = switchIcon(iconPhrase)

                
        const switchMonth = (m) => {
            switch(m){
                case '01':
                return 'January';
                break;
                case '02':
                return 'Februay';
                break;
                case '03':
                return 'March';
                break;
                case '04':
                return 'April';
                break;
                case '05':
                return 'May';
                break;
                case '06':
                return 'June';
                break;
                case '07':
                return 'July';
                break;
                case '08':
                return 'August';
                break;
                case '09':
                return 'September';
                break;
                case '10':
                return 'October';
                break;
                case '11':
                return 'November';
                break;
                case '12':
                return 'January';
                break;
            }
        }
        // The data received is in the wrong format: YYYYY-MM-DDT0TIME.
        // We're chopping it up & re-formatting. 
        const formatDate = () => {
            let fullDate = cur.Date.split('T0')
            let dmyDate = fullDate[0].split('-');
            let year = dmyDate[0]
            let month = switchMonth(dmyDate[1])
            let day = dmyDate[2]
            let str = `${month} ${day} ${year}`
            return str;
        }
        let header = formatDate();
        return <DashboardDailyItem 
        key= {`fiveDay${idx}`}
        header={header} 
        temp={`${cur.Temperature.Maximum.Value}${cur.Temperature.Maximum.Unit}`}
        iconText={phraseToClassName} 
        text={`
        Expect conditions to be ${cur.Day.IconPhrase.toLowerCase()}. Temperatures will range from ${cur.Temperature.Minimum.Value}${cur.Temperature.Minimum.Unit}, and 
        ${cur.Temperature.Maximum.Value}${cur.Temperature.Minimum.Unit}. Expect ${cur.Night.IconPhrase.toLowerCase()} towards the evening. 
 
         
         `} />
    });
    const dailyForecast = 
        <DashboardDetail 
        day={props.fiveDayForecast[0].Day.IconPhrase}
        dayIcon={switchIcon(props.fiveDayForecast[0].Day.IconPhrase)}
        night={props.fiveDayForecast[0].Night.IconPhrase}
        nightIcon={switchIcon(props.fiveDayForecast[0].Night.IconPhrase)}
        max={props.fiveDayForecast[0].Temperature.Maximum.Value}
        min={props.fiveDayForecast[0].Temperature.Minimum.Value}
        />
    
    return (
        
        <div className="Dashboard">
              <Switch>
                <Route path='/weekly-view' exact render={()=>fiveDayForecast}/>
                <Route path='/daily-view' exact render={()=>dailyForecast}/>
            </Switch>
        </div>
    );
};

export default withRouter(Dashboard);