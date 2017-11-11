import React from 'react';

var WeatherMessage = ({temp, location}) => <h3 className="text-center">It's {temp}
    <sup>
        °C
    </sup> in {location}</h3>;

module.exports = WeatherMessage;