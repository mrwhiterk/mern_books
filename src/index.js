import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux'
import Store from './Store'

const storeInstance = Store()

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));