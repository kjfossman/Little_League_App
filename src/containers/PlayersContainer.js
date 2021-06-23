import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player.js'
 

class PlayersContainer extends Component {


    

    render() {

        let players = this.props.players.map(player => <Player key={player.id} player={player}/>)

        
        return (
            <div>
                {players}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        players: state.players
      }
}
export default connect(mapStateToProps)(PlayersContainer);

