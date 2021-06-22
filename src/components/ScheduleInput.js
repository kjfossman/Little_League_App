import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css_files/Schedule.css';

class ScheduleInput extends Component {

    handleOnSubmit = event => {
        console.log('hello')
        debugger
        event.preventDefault();
     
      }

    render() {
        
        const teamInputs = this.props.teams.map(team => <option value={team.name}>{team.name}</option>)

        return (
            <div className='form'>
                <form onSubmit={this.handleOnSubmit}>
                    <label for='home_team'>Choose Home Team:</label>
                    <select name='home_team' id='home_team'>
                        {teamInputs} 
                    </select><br></br>
                    <label for='away_team'>Choose Away Team:</label>
                    <select name='away_team' id='away_team'>
                        {teamInputs}
                    </select><br></br>
                    <label for='date'>Date:</label>
                    <input type="datetime-local" name='date' id='date'></input><br></br>
                    <label for='home_team_score'>home_team_score:</label>
                    <input type="number" min="1" max="50" name='home_team_score' id='home_team_score'></input><br></br>
                    <label for='away_team_score'>away_team_score:</label>
                    <input type="number" min="1" max="50" name='away_team_score' id='away_team_score'></input><br></br>
                    <input type="submit" value="Add Game"></input>
                </form>
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
export default connect(mapStateToProps)(ScheduleInput);

