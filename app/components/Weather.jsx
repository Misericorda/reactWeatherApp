import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';
import ErrorModal from 'ErrorModal';
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
        var location = parsed.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        var location = parsed.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    handleSearch = (location) => {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined,
        });

        OpenWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                location: '',
                temp: '',
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    };

    render() {
        var {temp, isLoading, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                // return <WeatherMessage location={location} temp={temp}/>;
                return WeatherMessage({location: location, temp: temp});
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>

        );
    }
}
module.exports = Weather;