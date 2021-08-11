import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerActions.js';
import '../css_files/Player.css';
import PlayerList from './PlayerList.js';

class PlayerForm extends Component {

    state = {
        name: '',
        age: '',
        team: '',
        image: ''
    }

   

    

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.submitPlayer(this.state)
        this.props.goBack()
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, (state) => {console.log(this.state)})
    }

    render() {
    
        
        const teamInputs = this.props.teams.map((team, idx) => <option key={idx} value={team.id}>{team.name}</option>)
        if(this.props.loginStatus){
        return (
            <div className="player-form">
                
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                    <label htmlFor='player_name'>Player Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name"></input>
                    </div>
              
                    <label htmlFor='age'>Age:</label>
                    <input onChange={this.handleChange} type="number" min="7" max="14" name='age' id='age'></input><br></br>

                    <label htmlFor='image'>Image:</label>
                    <input onChange={this.handleChange} type="text" name='image' id='image'></input><br></br>  
                    
                    <label htmlFor='team'>Team:</label>
                    <select onChange={this.handleChange} name='team' id='team'>
                        <option key="default">Please Select Team</option>
                    {teamInputs}
                    </select><br></br>
                    
                    <input className='submit' type="submit" value="Add Player"></input>
                </form>
                <PlayerList/>
            </div>
        );}
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
        teams: state.teams,
        loginStatus: state.loginStatus
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
