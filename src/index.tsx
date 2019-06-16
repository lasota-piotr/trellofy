import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styled-components/macro'
// eslint-disable-next-line import/order
import * as types from 'styled-components/cssprop'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
