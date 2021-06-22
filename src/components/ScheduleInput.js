import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions/scheduleActions';
import '../css_files/Schedule.css';


class ScheduleInput extends Component {

    state = {
        home_team: 'San Francisco Giants',
        away_team: 'San Francisco Giants',
        date: '',
        home_team_score: 0,
        away_team_score: 0
    }

    handleOnSubmit = event => {
        console.log(this.state)
        event.preventDefault();
        
        this.props.submitGame(this.state)
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
        
        const teamInputs = this.props.teams.map(team => <option value={team.name}>{team.name}</option>)

        return (
            <div className='form'>
                <form onSubmit={this.handleOnSubmit}>
                    <label for='home_team'>Choose Home Team:</label>
                    <select onChange={this.handleonHomeTeamChange} name='home_team' id='home_team'>
                        {teamInputs} 
                    </select><br></br>
                    <label for='away_team'>Choose Away Team:</label>
                    <select onChange={this.handleonAwayTeamChange} name='away_team' id='away_team'>
                        {teamInputs}
                    </select><br></br>
                    <label for='date'>Date:</label>
                    <input onChange={this.handleDateChange} type="datetime-local" name='date' id='date'></input><br></br>
                    <label for='home_team_score'>home_team_score:</label>
                    <input onChange={this.handleHomeTeamScoreChange} type="number" min="1" max="50" name='home_team_score' id='home_team_score'></input><br></br>
                    <label for='away_team_score'>away_team_score:</label>
                    <input onChange={this.handleAwayTeamScoreChange} type="number" min="1" max="50" name='away_team_score' id='away_team_score'></input><br></br>
                    <input type="submit" value="Add Game"></input>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        submitGame: (formData) => {
            dispatch(addGame(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        games: state.games, 
        teams: state.teams
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleInput);

