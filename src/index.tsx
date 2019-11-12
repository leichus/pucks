import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import adder from './js/adder';

import './css/style.css';

console.log(adder(10, 2));

ReactDOM.render(
  <App/>,
  document.getElementById('react-container'), // eslint-disable-line no-undef
);

if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
}