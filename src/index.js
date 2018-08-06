import React from 'react'
import {render} from 'react-dom'
import App from './App'

import './styles/app.scss'
import 'foundation-sites/dist/js/foundation.min'

// import core foundation files


// ready to go
$(document).ready(function () {
  $(document).foundation()
});

// $(document).on('closed.zf.reveal', '[data-reveal]', (e) => {
//   // debugger
//   console.log('caught')
//   // $(this).remove()
// });


render(<App/>, document.getElementById('app'));
