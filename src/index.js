import React from 'react';
import ReactDOM from 'react-dom';
import './css_files/index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from './reducers/scheduleReducer.js'
import teamReducer from './reducers/teamReducer.js'

const rootReducer = combineReducers({
  games: scheduleReducer,
  teams: teamReducer 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render((
  <React.StrictMode>
  <Provider store={store}>

    <div className="index">
      <App store={store}/>
    </div>

  </Provider>
  </React.StrictMode>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
