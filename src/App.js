import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory} from 'react-router';
import {hot} from 'react-hot-loader';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

const App = () => (
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
        <Route exact path='/' component={Weather}/>
        <Route path='/about' component={About}/>
        <Route path='/examples' component={Examples}/>
      </Switch>
    </Main>
  </HashRouter>
);
export default module.hot ? hot(module)(App) : App


