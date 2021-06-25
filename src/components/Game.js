import React, { Component } from 'react';
import Moment from 'moment';
import ScheduleEdit from './ScheduleEdit.js';
import Navbar from './Navbar.js';
import ScheduleInput from './ScheduleInput.js';





class Game extends Component {

    state = {
        active: false
    }

    handleClick = (event) => {
    
        this.setState(prevState => ({
            active: !prevState.active
        }))
        console.log(this.props.game.home_team)
      
        
    }

    render() {
        const editform = <div><ScheduleEdit/></div>
        return (
            <div>
             <div onClick={this.handleClick} key={this.props.game.id} className="sched">{Moment.parseZone(this.props.game.date).format('MMMM DD,  LT')} <div className='score'>{"SCORE"}</div>
                <div className='teams'>{this.props.game.away_team.name}<div className='team-score'>{this.props.game.away_team_score}</div><br></br> 
                {this.props.game.home_team.name}<div className='team-score'>{this.props.game.home_team_score}</div></div>
                <div className="row"><div className='result'>{this.props.game.winner ? `Winning Team: ${this.props.game.winner.name}` : ''}
                <div className='logo'>{this.props.game.winner ? <img alt='logo' src={this.props.game.winner.img}></img> : ""} </div></div></div>
                </div>
                
                <div>
                 
                 {this.state.active ? <ScheduleEdit game={this.props.game}/> : ''}
                 </div>   
                
                
                </div>

            
        );
    }
}

export default Game;