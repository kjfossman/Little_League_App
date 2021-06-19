import React from 'react';
import ReactDOM from 'react-dom';
import './css_files/index.css';
import App from './App';
import Navbar from './components/Navbar.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header.js'

ReactDOM.render((
  <Router>
    <div className="index">
  <React.StrictMode>
    <Header />
    <Navbar />
    <Route exact path="/home" component={App} />
    <Route path="/about" component={Navbar}/>
  </React.StrictMode>
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
