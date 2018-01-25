import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecastData from './../services/transformForecastData';
import './styles.css';

const api_key = '92181414c055e929218aaabbf815f052';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData : null }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecastData(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays() {
        return 'Render Item';
        //return days.map( day => ( <ForecastItem weekDay={day} data={data}></ForecastItem> ) );
    }

    renderProgress() {
        return 'cargando';
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Extended Weather Info for {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgress()
                }
                
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;