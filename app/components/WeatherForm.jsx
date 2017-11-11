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
                <input type="search" ref={(city) => { this.city = city }} placeholder="Search weather by city"/>
                <button className="button expanded hollow">Get Weather</button>
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