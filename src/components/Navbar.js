import React, { Component } from 'react';
import '../css_files/Navbar.css';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

class Navbar extends Component {

    


    render() {
        return (
            <div>
                <button><b>HOME</b></button>
                <button><b>SCHEDULE/RESULTS</b></button>
                <button><b>TEAMS</b></button>
                <button><b>CONTACT US</b></button> 
                <NavLink
                    to="/about"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >About
                </NavLink>             
            </div>
        );
    }
}

export default Navbar;