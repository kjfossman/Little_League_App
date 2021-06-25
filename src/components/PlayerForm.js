import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions.js'

class PlayerForm extends Component {

    state = {
        name: '',
        age: '',
        team: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.submitPlayer(this.state)
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, (state) => {console.log(this.state)})
    }

    render() {
        
        const teamInputs = this.props.teams.map((team, idx) => <option key={idx} value={team.id}>{team.name}</option>)

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label htmlFor='player_name'>Player Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name"></input>
                    
              
                    <label htmlFor='age'>Age:</label>
                    <input onChange={this.handleChange} type="number" min="7" max="14" name='age' id='age'></input><br></br>  
                    <label htmlFor='team'>Team:</label>
                    <select onChange={this.handleChange} name='team' id='team'>
                        <option key="default">Please Select Team</option>
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
