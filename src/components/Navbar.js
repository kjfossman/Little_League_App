import React, { Component } from 'react';
import '../css_files/Navbar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends Component {
    

    render() {
        return (
            <div>
                 <button><NavLink 
                    to="/home" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>HOME</b>
                </NavLink></button>  
                <button><NavLink 
                    to="/schedule" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>SCHEDULE/RESULTS</b>
                </NavLink></button>  
                <button><NavLink 
                    to="/teams" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>TEAMS</b>
                </NavLink></button> 
                <button><NavLink 
                    to="/players"
                    exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>PLAYERS</b>
                </NavLink></button> 
               {this.props.loginStatus &&
                 <button><NavLink 
                    to="/player" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>ADD PLAYER</b>
                </NavLink></button> }  
                <button><NavLink 
                    to="/contacts" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>CONTACT</b>
                </NavLink></button> 
                
                         
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        loginStatus: state.loginStatus
      }
}

export default connect(mapStateToProps)(Navbar);