
import './css_files/App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'
import { fetchTeams} from './actions/scheduleActions.js'

 

class App extends Component {
  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchTeams()
    console.log(this.props.games)
    console.log('break')
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    teams: state.teams
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchGames: () => dispatch(fetchGames()),
  fetchTeams: () => dispatch(fetchTeams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

