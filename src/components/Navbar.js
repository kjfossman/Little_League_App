import React, { Component } from 'react';
import '../css_files/Navbar.css';
import { NavLink } from 'react-router-dom';


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
                    to="/contact" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>CONTACT US</b>
                </NavLink></button>  
                <button><NavLink 
                    to="/about"
                    exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>ABOUT</b>
                </NavLink></button>             
            </div>
        );
    }
}

export default Navbar;