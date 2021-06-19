import React from 'react';
import ReactDOM from 'react-dom';
import './css_files/index.css';
import App from './App';
import Navbar from './components/Navbar.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from './reducers/scheduleReducer.js'

const store = createStore(scheduleReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
  <Router>
    <div className="index">
  <React.StrictMode>
    <Header />
    <Navbar />
    <Route exact path="/home" component={App} />
    <Route path="/schedule" component={Navbar}/>
    <Route path="/teams" component={Navbar}/>
    <Route path="/contact" component={Navbar}/>
    <Route path="/about" component={Navbar}/>
  </React.StrictMode>
    </div>
  </Router>
  </Provider>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
