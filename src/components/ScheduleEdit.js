import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGame } from '../actions/scheduleActions';
import '../css_files/ScheduleEdit.css';
import Moment from 'moment';


class ScheduleEdit extends Component {

    state = {
        home_team: this.props.home_team_id,
        away_team: this.props.away_team_id,
        date: this.props.game.date,
        home_team_score: this.props.game.home_team_score,
        away_team_score: this.props.game.away_team_score,
        game_id: this.props.game.id
    }

    handleOnSubmit = event => {
        
        event.preventDefault();
        console.log(this.state)
        console.log(this.state.away_team)
        console.log(this.state.home_team)
        console.log(this.state.game_id)
        
        this.props.editGame(this.state)
      }

    handleonHomeTeamChange = event => {
        
        this.setState({
            home_team: event.target.value
        })
    }

    handleonAwayTeamChange = event => {
        this.setState({
            away_team: event.target.value
        })
    }

    handleDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleHomeTeamScoreChange = event => {
        this.setState({
            home_team_score: event.target.value
        })
    }

    handleAwayTeamScoreChange = event => {
        this.setState({
            away_team_score: event.target.value
        })
    }

    render() {
       
        const teamInputs = this.props.teams.map((team, idx) => <option key={idx} value={team.id}>{team.name}</option>)

        return (
            <div className='edit'>
                {"Update Game"}
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label htmlFor='away_team'>Away Team:</label>
                    <select onChange={this.handleonAwayTeamChange} name='away_team' id='away_team'>
                        {teamInputs}
                        <option selected value={this.state.away_team}>{this.props.game.away_team.name}</option>
                        {/* <option selected='selected' value={this.state.home_team}>{this.state.home_team}</option> */}
                    </select><br></br>
                    <label htmlFor='home_team'>Home Team:</label>
                    <select onChange={this.handleonHomeTeamChange} name='home_team' id='home_team'>
                        {teamInputs} 
                        <option selected value={this.state.home_team}>{this.props.game.home_team.name}</option>
                        {/* <option selected='selected' value={this.state.away_team.id}>{this.state.away_team}</option> */}
                    </select><br></br>
                    <label htmlFor='date'>Date:</label>
                    <input onChange={this.handleDateChange} type="datetime-local" name='date' id='date' value={this.state.date}></input><br></br>  
                    <label htmlFor='away_team_score'>Away Team Score:</label>
                    <input onChange={this.handleAwayTeamScoreChange} type="number" min="1" max="50" name='away_team_score' id='away_team_score' value={this.state.away_team_score}></input><br></br>
                    <label htmlFor='home_team_score'>Home Team Score:</label>
                    <input onChange={this.handleHomeTeamScoreChange} type="number" min="1" max="50" name='home_team_score' id='home_team_score' value={this.state.home_team_score}></input><br></br>
                    <input className='submit' type="submit" value="Update Game"></input>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        editGame: (formData) => {
            dispatch(updateGame(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        games: state.games, 
        teams: state.teams
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEdit);

