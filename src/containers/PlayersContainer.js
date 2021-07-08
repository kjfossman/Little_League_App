import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player.js'
 

class PlayersContainer extends Component {

    state = {
        input: 0
    }
    

    render() {

      

        let players = this.props.players.map(player => <Player key={player.id} player={player} team={player.team}/>)

        
        return (
            <div>
                {/* <div>
                    <input type="number" value={this.state.input}></input>
                </div> */}
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

