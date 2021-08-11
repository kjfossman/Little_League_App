import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import '../css_files/Schedule.css';
import Game from './Game.js';

class Schedule extends Component {

    state = {
       year: new Date().getFullYear().toString()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        console.log(this.state)
        
        // let games = this.props.games.map(game => <Game key={game.id} game={game}/>)
        
        let gamesSeason = this.props.games.filter(game => parseInt(game.date).toString() === this.state.year )
        
        gamesSeason = gamesSeason.map(game => <Game key={game.id} game={game}/>)
            // <div onClick={this.handleClick} key={game.id} className="sched">{Moment.parseZone(game.date).format('MMMM DD,  LT')} <div className='score'>{"SCORE"}</div>
            //     <div className='teams'>{game.away_team.name}<div className='team-score'>{game.away_team_score}</div><br></br> 
            //     {game.home_team.name}<div className='team-score'>{game.home_team_score}</div></div>
            //     <div className="row"><div className='result'>{game.winner ? `Winning Team: ${game.winner.name}` : ''}
            //     <div className='logo'>{game.winner ? <img alt='logo' src={game.winner.img}></img> : ""} </div></div></div></div>)
        
        return (
            <div>
                <div className="form-input">
                    <div className="filter">
                        Filter By Year
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type='number' name='year' id='year' min="2021"/>
                        {/* <input className='submit' type="submit" value="Filter By Season"></input> */}
                    </form>
                </div>
                {/* {games} */}
                {gamesSeason}
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