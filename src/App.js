
import './css_files/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'
import { fetchTeams} from './actions/teamActions.js'
import { fetchPlayers} from './actions/playerActions.js'
import { fetchAnnouncements } from './actions/announcementActions';

import Navbar from './components/Navbar.js'
import ScheduleContainer from './containers/ScheduleContainer.js'
import TeamsContainer from './containers/TeamsContainer.js'
import PlayersContainer from './containers/PlayersContainer.js'
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header.js'
import PlayerForm from './components/PlayerForm';
import { withRouter } from 'react-router-dom';

 

class App extends Component {
  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchTeams()
    this.props.fetchPlayers()
    this.props.fetchAnnouncements()
  }

  render() {
    return (
      <Router>
      <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/home" component={AnnouncementsContainer} />
            <Route path="/schedule" component={ScheduleContainer}/>
            <Route path="/teams" component={TeamsContainer}/>
            <Route path="/player" component={(routeInfo) => {
              console.log(routeInfo)
              return <PlayerForm goBack={() => routeInfo.history.push("/players")} />}}/>
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
  fetchPlayers: () => dispatch(fetchPlayers()),
  fetchAnnouncements: () => dispatch(fetchAnnouncements())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

