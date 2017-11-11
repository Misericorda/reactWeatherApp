import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e) {
        e.preventDefault();
        let city = this.city.value;
        let encodedLocation = encodeURIComponent(city);
        if (city && city.length > 0) {
            this.city.value = '';
            window.location.hash ='#/?location='+city;
        }
    }
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get
                                Weather</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active"
                                     activeStyle={{fontWeight: 'bold'}}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/examples" activeClassName="active"
                                     activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref={(city) => { this.city = city }}/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = Nav;