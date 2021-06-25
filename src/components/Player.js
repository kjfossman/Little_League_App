import React, { Component } from 'react';
import '../css_files/Player.css';

class Player extends Component {
    debugger
    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className='playerimg' src="https://a.espncdn.com/photo/2017/0817/Jedd_Gyorko1.png" alt="picture"></img>
                    </div>
                    <div className="flip-card-back" style={{backgroundColor: `var(--${this.props.team.name.split(' ')[0]}`, color: `var(--${this.props.team.name.split(' ')[0]}`+"Text"}} >
                        <h1>{this.props.player.name}</h1>
                        <h3>{`Age: ${this.props.player.age}`}</h3>
                        <h3>{`Team: ${this.props.team.name}`}</h3>
                        <img src={this.props.team.img} alt="logo"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;