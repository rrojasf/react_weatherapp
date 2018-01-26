import moment from 'moment';
import transformWeather from './transformWeather';

const transforForecastData = (data) => {
    return data.list.filter( item => (
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 19
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
};

export default transforForecastData;