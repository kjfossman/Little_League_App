
import './css_files/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'
import { fetchTeams} from './actions/teamActions.js'
import { fetchPlayers} from './actions/playerActions.js'

import Navbar from './components/Navbar.js'
import ScheduleContainer from './containers/ScheduleContainer.js'
import TeamsContainer from './containers/TeamsContainer.js'
import PlayersContainer from './containers/PlayersContainer.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header.js'
import PlayerForm from './components/PlayerForm';

 

class App extends Component {
  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchTeams()
    this.props.fetchPlayers()
  }

  render() {
    return (
      <Router>
      <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/home" component={Navbar} />
            <Route path="/schedule" component={ScheduleContainer}/>
            <Route path="/teams" component={TeamsContainer}/>
            <Route path="/contacts" component={PlayerForm}/>
            <Route path="/players" component={PlayersContainer}/>
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
  fetchTeams: () => dispatch(fetchTeams()),
  fetchPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

