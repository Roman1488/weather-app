import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import DateWidget from './components/DateWidget';

const API_KEY = 'f37794f9be31f924418625d7c1def8db';

class App extends Component {
  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
  };
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`);
      const data = await api_call.json();
      if (city && country) {
          if (data.cod == 404) {
              this.setState({
                  temperature: undefined,
                  city: undefined,
                  country: undefined,
                  humidity: undefined,
                  description: undefined,
                  error: data.message
              });
          } else {
              this.setState({
                  temperature: data.main.temp,
                  city: data.name,
                  country: data.sys.country,
                  humidity: data.main.humidity,
                  description: data.weather[0].description,
                  error: ""
              });
          }
      } else {
          this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "Please, enter the value."
          });
      }

  };

  render() {
    return (
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-5 title-container">
                                <Titles/>
                            </div>
                            <div className="col-7 form-container">
                                <DateWidget/>
                                <Form userLocation={this.state.userLocation} getWeather={this.getWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;