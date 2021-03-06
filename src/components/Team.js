import React, { Component } from 'react';
import '../css_files/Team.css';

class Team extends Component {
    
    state = {
        players: true 
    }

    handleClick = (event) => {
        this.setState(prevState => ({
            players: !prevState.players
        }))
        
       
    }
    
    
    render() {
        const playersListjsx = <ul><u>{"Players"}</u>{this.props.team.players.map((player, idx) => <li key={idx}>{player.name} {player.age}</li>)}</ul>
        return (
         
            <div className='card' onClick={this.handleClick} style={{backgroundColor: `var(--${this.props.team.name.split(' ')[0]}`}}>
      
                {`${this.props.team.name} (${this.props.team.wins} - ${this.props.team.losses})`}<br>
                </br>{`Ages: ${this.props.team.ages}`}<br></br>
                <img className='teamimg' alt='logo' src={this.props.team.img}></img>
                
             
                <div className='player'>
                 
                {this.state.players ? playersListjsx : ''}
                </div>
               
            </div>
      
           
        );
    }
}

export default Team;

// style={{backgroundColor: `var(--${this.props.team.name.split(' ')[0]}`}}