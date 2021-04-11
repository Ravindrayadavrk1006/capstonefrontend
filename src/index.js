import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './dist/css/main.css';
import './scss/main.css';
import { HashRouter } from 'react-router-dom';
// import './scss/main.scss';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);