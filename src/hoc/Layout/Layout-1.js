import React, {Component} from 'react';

import Nav from '../../components/Nav';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import Footer from '../../components/Footer';
import background from '../../assets/background.jpg'
import apiKeys from '../../data/apiKeys';
import axios from 'axios'


class Layout extends Component{
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
          let cUpdatedQuery = this.state.updatedQuery
          this.setState({
              updatedQuery: !cUpdatedQuery,
              backgroundImageURL: null,
              query: receivedQuery,
              city: receivedQuery
          }, this.showUpdatedState);
      }
      componentDidMount(){
  
          console.log(`COMPONENT DID MOUNT ${this.state.updatedQuery}`  )
         
      }
      componentWillUpdate(){
        console.log(`COMPONENT WILL UPDATE ${this.state.updatedQuery}`)
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
              return;
          }


      }
      componentDidUpdate(){
        if(this.state.updatedQuery){
            this.setState({updatedQuery: !this.state.updatedQuery});
        }
        console.log(`ComponentDidUpdate ${this.state.updatedQuery}`)
      }
    render(){
        return (
            <div className="Layout"  style={{backgroundImage: `url(${this.state.backgroundImageURL})` }} >
                <Nav></Nav>
                <WeatherContainer 
                // changeBackground={(passedURL)=>this.setBackgroundImage(passedURL)}
                sendQuery={this.sendQuery}
                queryHandle={this.queryHandler}
                title={this.state.city}
                date={this.state.date}
                
                >
                </WeatherContainer>
                <Footer></Footer>
            </div>
        );
    }

};

export default Layout;