import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions.js'

class PlayerForm extends Component {

    state = {
        player_name: '',
        player_age: '',
        player_team_id: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.submitPlayer(this.state)
      }

    handleNameChange = event => {
        this.setState({
           player_name: event.target.value
        })
    }

    handleAgeChange = event => {
        this.setState({
            player_age: event.target.value
        })
    }

    handleTeamChange = event => {
        this.setState({
            player_team_id: event.target.value
        })
    }

    render() {
        
        const teamInputs = this.props.teams.map((team, idx) => <option key={idx} value={team.id}>{team.name}</option>)

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label htmlFor='player_name'>Player Name:</label>
                    <input onChange={this.handleNameChange} type="text" name="name" id="name"></input>
                    
              
                    <label htmlFor='age'>Age:</label>
                    <input onChange={this.handleAgeChange} type="number" min="7" max="14" name='age' id='age'></input><br></br>  
                    <label htmlFor='team'>Team:</label>
                    <select onChange={this.handleTeamChange} name='team' id='team'>
                    {teamInputs}
                    </select><br></br>
                    
                    <input className='submit' type="submit" value="Add Player"></input>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitPlayer: (formData) => {
            dispatch(addPlayer(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
