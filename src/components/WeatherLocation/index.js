import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = '92181414c055e929218aaabbf815f052';
const url = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
    constructor ( {city}) {
        super();
        this.state = {
            city,
            data: null
        }
        //console.log('constructor');
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then ( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data:data}); // {data}
        });
    }

    componentDidMount() {
        //console.log('componentDidMount');
    }

    componentWillUpdate() {
        //console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }

    render = () => {
        //console.log('render');
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city} />
                { data ? <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={60} thickness={7}/>
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>        
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;