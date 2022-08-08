import React from 'react';
import './App.css';
import Form from './Component/Form';
import Title from './Component/Title';
import Weather from './Component/Weather';

class App extends React.Component{
  constructor(props){
    super()
    this.state = {
       longitude: undefined,
       lattitude: undefined,
       temperature: undefined,
       humidity: undefined,
       description: undefined,
       wind: undefined,
       error: undefined
    }
  }
getWeather = async (e) =>{
  e.preventDefault();
  const longitude = e.target.elements.longitude.value;
  const lattitude = e.target.elements.lattitude.value;
  const api_call = await fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${lattitude}`, {method: 'get'});
  const data = await api_call.json();
  console.log(data)

  if(longitude && lattitude){
    this.setState({
      longitude: data.coord.lon,
				lattitude: data.coord.lat,
				temperature: data.main.temp,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				wind: data.wind.speed,
				error: ""
    });
  }
  else{
    this.setState({
      longitude: undefined,
       lattitude: undefined,
       temperature: undefined,
       humidity: undefined,
       description: undefined,
       wind: undefined,
       error: 'please enter a value'
    });
  }
}
  render(){
    return(
      <React.Fragment>
        <div className="wrapper">
        <div className="main">
      <div className='Container shadow'>
        <div className='row'>
          <div className='col-sm-5 title-container'>
            <Title/>
          </div>
          <div className='col-sm-7 form-container'>
            <Form getWeather = {this.getWeather}/>
            <Weather
            longitude = {this.state.longitude}
            lattitude = {this.state.lattitude}
            temperature = {this.state.temperature}
            humidity = {this.state.humidity}
            description = {this.state.description}
            wind = {this.state.wind}
            error = {this.state.error}
            />
          </div>
        </div>
      </div>
      </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
