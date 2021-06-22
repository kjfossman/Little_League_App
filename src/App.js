
import './css_files/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'
import { fetchTeams} from './actions/scheduleActions.js'

import Navbar from './components/Navbar.js'
import Schedule from './components/Schedule.js'
import TeamsContainer from './containers/TeamsContainer.js'
import Players from './components/Players.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header.js'

 

class App extends Component {
  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchTeams()
    console.log(this.props.games)

    console.log(this.props.teams)
  }

  render() {
    return (
      <Router>
      <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/home" component={Navbar} />
            <Route path="/schedule" component={Schedule}/>
            <Route path="/teams" component={TeamsContainer}/>
            <Route path="/contact" component={Navbar}/>
            <Route path="/about" component={Players}/>
      </div>
      </Router>
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

