import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
    switch(weatherState) {
        case CLOUD:
            return ("cloud");
        case CLOUDY:
            return ("cloudy");
        case SUN:
            return ("sun");
        case RAIN:
            return ("rain");
        case SNOW:
            return ("snow");
        case WINDY:
            return ("windy");
        case THUNDER:
            return ("day-thunderstorm");
        case DRIZZLE:
            return ("day-showers");                        
        default:
            return ("day-sunny");
    }
};

const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x"></WeatherIcons>);
}; 

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont' >
        {getWeatherIcon(weatherState)}
        <span className='temperature' >{`${temperature}`}</span>
        <span className='temperatureType'>Cº</span>
    </div>
);

WeatherTemperature.prototype =  {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;