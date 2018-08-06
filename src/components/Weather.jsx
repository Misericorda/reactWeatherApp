import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import {getTemp} from '../api/OpenWeatherMap';
import ErrorModal from './ErrorModal';
import queryString from 'query-string';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: undefined,
    }
  }

  componentWillReceiveProps(newProps) {
    const parsed = queryString.parse(newProps.location.search);
    let location = parsed.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    let location = parsed.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  handleSearch = (location) => {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });
    getTemp(location)
      .then(temp => {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      })
      .catch(errorMessage => {
        let message = errorMessage.message;
        if (message.indexOf('404')) {
          message = 'Failed to find the location: ' + location
        }
        that.setState({
          location: '',
          temp: '',
          isLoading: false,
          errorMessage: message
        });
      });
  };

  renderMessage = () => {
    let {temp, isLoading, location} = this.state;
    if (isLoading) {
      return <h3 className="text-center">Fetching weather...</h3>;
    } else if (temp && location) {
      // return <WeatherMessage location={location} temp={temp}/>;
      return WeatherMessage({location: location, temp: temp});
    }
  };

  renderError = () => {
    let {errorMessage} = this.state;
    if (typeof errorMessage === 'string') {
      return <ErrorModal message={errorMessage}/>
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {this.renderMessage()}
        {this.renderError()}
      </div>
    );
  }
}

export default Weather;