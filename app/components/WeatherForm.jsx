import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        let city = this.city.value;
        if (typeof city === 'string' && city.length > 0) {
            this.props.onSearch(city)
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref={(city) => { this.city = city }}/>
                <button>Get Weather</button>
            </form>
        );
    }
}
// WeatherForm.propTypes = {
//
// };
// WeatherForm.defaultProps = {
//
// };

module.exports = WeatherForm;