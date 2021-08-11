import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePlayer } from '../actions/playerActions';
class PlayerList extends Component {

    handleClick = (e) => {
        
        debugger
        this.props.removePlayer(parseInt(e.target.value))
    }


    render() {

        let players = this.props.players.map(player => <div>{player.name}, {player.age}<button value={player.id} onClick={this.handleClick}>Delete</button></div>)

        
        return (
            <div>
                {players}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removePlayer: (formData) => {
            dispatch(deletePlayer(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        players: state.players
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
