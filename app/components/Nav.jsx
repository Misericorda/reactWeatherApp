import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var Nav = (props) => {
    return (
        <div>
            <h2>Header</h2>
            <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
            <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
        </div>

    );
};

module.exports = Nav;