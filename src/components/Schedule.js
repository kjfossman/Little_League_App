import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import '../css_files/Schedule.css';

class Schedule extends Component {

    render() {

        let games = this.props.games.map(game => 
            <div className="sched">{Moment(game.date).format('MMMM: DD LT')} <div className='score'>{"SCORE"}</div>
                <div className='teams'>{game.away_team.name}<div className='team-score'>{game.away_team_score}</div><br></br> 
                {game.home_team.name}<div className='team-score'>{game.home_team_score}</div></div><br></br></div>)

        return (
            <div>
                {games}
                    
                {/* {Moment(this.props.games[0].date).format('MMMM: DD LT')} */}
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