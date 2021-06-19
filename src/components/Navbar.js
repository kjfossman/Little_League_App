import React, { Component } from 'react';
import '../css_files/Navbar.css';

class Navbar extends Component {

    
    render() {
        return (
            <div>
                <button><b>HOME</b></button>
                <button><b>SCHEDULE/RESULTS</b></button>
                <button><b>TEAMS</b></button>
                <button><b>CONTACT US</b></button>              
            </div>
        );
    }
}

export default Navbar;