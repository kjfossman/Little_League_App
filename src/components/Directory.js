import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Directory extends Component {

    // handleClick = () => {
    //     this.props.active = false
    // }

    render() {
   
        return (
            <div>
            <div onClick={this.props.onClick}>
            <NavLink 
                    to="/home" exact
                      >
                
                <button>Continue As Guest</button>
                </NavLink>
            </div>

            <div >
            <NavLink 
                    to="/login" exact
                      >
                
                <button onClick={this.props.login}>Continue As Admin</button>
                </NavLink>
            </div>
            <div><button>Logout</button></div>
            </div>
        );
    }
}

export default Directory;