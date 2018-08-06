const WeatherMessage = ({temp, location}) => (
  <h3 className="text-center">It's {temp}
    <sup>
      °C
    </sup> in {location}
  </h3>
);

export default WeatherMessage;