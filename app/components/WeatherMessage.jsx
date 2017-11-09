import React from 'react';

var WeatherMessage = ({temp, location}) => <h3>It's {temp} °C in {location}</h3>;

module.exports = WeatherMessage;