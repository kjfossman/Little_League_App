
import './css_files/App.css';

import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchGames } from './actions/scheduleActions.js'
import { fetchTeams} from './actions/teamActions.js'
import { fetchPlayers} from './actions/playerActions.js'
import { fetchAnnouncements } from './actions/announcementActions';
import { fetchContacts } from './actions/contactActions';
import Navbar from './components/Navbar.js'
import Login from './components/Login';
import ScheduleContainer from './containers/ScheduleContainer.js'
import TeamsContainer from './containers/TeamsContainer.js'
import PlayersContainer from './containers/PlayersContainer.js'
import ContactsContainer from './containers/ContactsContainer';
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Header from './components/Header.js'
import PlayerForm from './components/PlayerForm';
import { withRouter } from 'react-router-dom';
import Directory from './components/Directory';
import { loginStatus } from './actions/loginStatusActions';



 

class App extends Component {
  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchTeams()
    this.props.fetchPlayers()
    this.props.fetchAnnouncements()
    this.props.fetchContacts()
    this.props.loginStatus()
  }
  

  state = {
    active: false,
    admin: false,
    loggedin: false,
    isLoggedIn: false,
    user: {}
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLogeedIn: false, 
      user: {}
    })
  }

  change = () => {
    this.setState(prevState => ({
      active: !prevState.active,
  }))
  }

  login = () => {
    this.setState(prevState => ({
      admin: !prevState.admin,
    }))
  }

  render() {
    debugger
    if (this.state.admin && !this.state.isLoggedIn)
    return (
      <Router>
        <div>
          <Route exact path="/login" 
          render={(props) => (
            <Login info={props} handleLogin={this.handleLogin}/>)}/>
        </div>
      </Router>
    )
    
    else if (!this.state.isLoggedIn && this.state.active)
    return (
      <Router>
      <div className="App">
            <Header />
            <Navbar />
            
            <Route exact path="/home" component={AnnouncementsContainer} />
            <Route path="/schedule" component={ScheduleContainer}/>
            <Route path="/teams" component={TeamsContainer}/>
            <Route path="/contacts" component={ContactsContainer}/>
            <Route path="/player" component={(routeInfo) => {
              return <PlayerForm goBack={() => routeInfo.history.push("/players")} />}}/>
            <Route path="/players" component={PlayersContainer}/>
      </div>
      </Router>
    )
    else if (!this.state.active)
    return (
      <Router>
        <div>
          <Route exact path="/directory" 
           render={(routeInfo) => (
          <Directory onClick={this.change} routeinfo={routeInfo} login={this.login}/>
          )}/>
        </div>
      </Router>
    )
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
  fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  fetchContacts: () => dispatch(fetchContacts()),
  loginStatus: () => dispatch(loginStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

