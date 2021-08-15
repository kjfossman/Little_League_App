import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions/scheduleActions';
import '../css_files/Schedule.css';



class ScheduleInput extends Component {

    state = {
        home_team: '1',
        away_team: '1',
        date: '',
        home_team_score: '',
        away_team_score: ''
    }

    handleOnSubmit = event => {  
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
        
        const teamInputs = this.props.teams.map((team, idx) => <option key={idx} value={team.id}>{team.name}</option>)
        console.log(this.state)
        return (
            <div className='form'>
                {"Makeup Game Form"}
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label htmlFor='away_team'>Away Team:</label>
                    <select onChange={this.handleonAwayTeamChange} name='away_team' id='away_team' >
                        {teamInputs}
                        <option value='' selected></option>
                    </select><br></br>
                    <label htmlFor='home_team'>Home Team:</label>
                    <select onChange={this.handleonHomeTeamChange} name='home_team' id='home_team'>
                        {teamInputs} 
                        <option value='' selected></option>
                    </select><br></br>
                    <label htmlFor='date'>Date:</label>
                    <input onChange={this.handleDateChange} type="datetime-local" name='date' id='date'></input><br></br>  
                    <label htmlFor='away_team_score'>Away Team Score:</label>
                    <input onChange={this.handleAwayTeamScoreChange} type="number" min="0" max="50" name='away_team_score' id='away_team_score'></input><br></br>
                    <label htmlFor='home_team_score'>Home Team Score:</label>
                    <input onChange={this.handleHomeTeamScoreChange} type="number" min="0" max="50" name='home_team_score' id='home_team_score'></input><br></br>
                    <input className='submit' type="submit" value="Add Game"></input>
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

