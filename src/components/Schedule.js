import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import '../css_files/Schedule.css';

class Schedule extends Component {

    render() {

        
        let games = this.props.games.map(game => 
            
            <div key={game.id} className="sched">{Moment.parseZone(game.date).format('MMMM DD,  LT')} <div className='score'>{"SCORE"}</div>
                <div className='teams'>{game.away_team.name}<div className='team-score'>{game.away_team_score}</div><br></br> 
                {game.home_team.name}<div className='team-score'>{game.home_team_score}</div></div>
                <div className="row"><div className='result'>{game.winner ? `Winning Team: ${game.winner.name}` : ''}
                <div className='logo'>{game.winner ? <img alt='logo' src={game.winner.img}></img> : ""} </div></div></div></div>)
        
        return (
            <div>
                {games}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        games: state.games
      }
}
export default connect(mapStateToProps)(Schedule);

// Moment(game.date).format('MMMM DD,  LT')