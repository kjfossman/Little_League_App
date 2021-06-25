import React, { Component } from 'react';
import { connect } from 'react-redux';

class Players extends Component {
    render() {
        
        let players = this.props.teams.players.map(player => <div>{player}</div>)

        return (
            <div>
                {players}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams.teams
      }
}

export default connect(mapStateToProps)(Players);