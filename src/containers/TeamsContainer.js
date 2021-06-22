import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from '../components/Team';


class TeamsContainer extends Component {
    
    state = {
        players: false 
    }

    handleClick = (event) => {
        this.setState(prevState => ({
            players: !prevState.players
        }))
        
        let testing = this.props.teams.find(team => team.id == event.target.id)
        console.log(testing)
    }

    render() {

        let teams = this.props.teams.map(team => <Team onClick={this.handleClick} key={team.id} team={team}/> )
     
    
        return (
            
            <div>
                {teams} {this.state.players ? 'on' : 'off'}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams.teams
      }
}
export default connect(mapStateToProps)(TeamsContainer);
