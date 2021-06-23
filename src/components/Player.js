import React, { Component } from 'react';
import '../css_files/Player.css';

class Player extends Component {
    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className='playerimg' src="https://a.espncdn.com/photo/2017/0817/Jedd_Gyorko1.png" alt="picture"></img>
                    </div>
                    <div className="flip-card-back">
                        <h1>{this.props.player.name}</h1>
                        <p>{this.props.player.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;