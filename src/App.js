
import './css_files/App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'

 

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchGames()
  }

  render() {
    console.log(this.props.games)
    return (
      <div className="App">
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchGames: () => dispatch(fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

