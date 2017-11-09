import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=180f2bddb788176e9859933b4fd8b951&units=metric';


const api_key = '180f2bddb788176e9859933b4fd8b951';

module.exports = {
    getTemp: function (location) {
        console.log(location);
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        axios.defaults.baseURL = '';

        return axios.get(requestUrl).then(function (res) {
            if (res.cod && res.message) {
                throw new Error(res.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.message);
        });
    }
};