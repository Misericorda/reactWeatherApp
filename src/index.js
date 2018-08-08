import React from 'react'
import {render} from 'react-dom'
import App from './App'

import './styles/app.scss'
import 'foundation-sites/dist/js/foundation.min'

// start foundation
$(document).ready(function () {
  $(document).foundation()
});

render(<App/>, document.getElementById('app'));
