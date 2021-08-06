import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/loginStatusActions';


class Directory extends Component {

  

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
            <div>
                <button onClick={() => console.log('hey')}>Logout</button>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    clearSession: () => dispatch(logout())
    }
  }



export default connect(null, mapDispatchToProps)(Directory);