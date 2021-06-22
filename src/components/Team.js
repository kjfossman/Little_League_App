import React, { Component } from 'react';

class Team extends Component {
    
    state = {
        players: false 
    }

    handleClick = (event) => {
        this.setState(prevState => ({
            players: !prevState.players
        }))
        
       
    }
    
    
    render() {
        const playersListjsx = <ul><li>{this.props.team.players[0].name}</li></ul>
        return (
            <div className='card' onClick={this.handleClick} style={{backgroundColor: 'orange'}}>
                {this.props.team.name}
                {this.state.players ? playersListjsx : 'off'}
            </div>
        );
    }
}

export default Team;