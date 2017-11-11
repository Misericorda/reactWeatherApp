import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory, IndexRoute} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <HashRouter history={hashHistory}>
        <Main>
            <Switch>
                <Route exact path='/' component={Weather}/>
                <Route path='/about' component={About}/>
                <Route path='/examples' component={Examples}/>
            </Switch>
        </Main>
    </HashRouter>
    ,document.getElementById('app')
);
