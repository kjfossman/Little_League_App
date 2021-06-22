import React, { Component } from 'react';
import { connect } from 'react-redux';


class Team extends Component {
    
    state = {
        players: false 
    }

    handleClick = (event) => {
        this.setState(prevState => ({
            players: !prevState.players
        }))
        console.log(this.state.players)
        let testing = this.props.teams.find(team => team.name === event.target.innerText)
        console.log(testing)
    }

    render() {

        let teams = this.props.teams.map(team => <div onClick={this.handleClick} key={team.id}>{team.name}</div>)
     
    
        return (
            
            <div>
                {teams} {this.state.players ? 'hayoo' : 'not'}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams.teams
      }
}
export default connect(mapStateToProps)(Team);
