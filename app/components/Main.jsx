import React from 'react';
import Nav from 'Nav';

import {Switch, Route} from 'react-router-dom'
var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main component</h2>
            {props.children}
        </div>

    );
};

module.exports = Main;