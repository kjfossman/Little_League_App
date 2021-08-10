import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/loginStatusActions';
import Login from './Login';
import '../css_files/Login.css';


class Directory extends Component {

  

    render() {
        
        if(this.props.loginStatus){
            return (
                <div>
                <button onClick={() => this.props.clearSession()}>Logout</button>
                </div>
            )
        }
        return (
            <div className="Login">
                <Login routeInfo={this.props.routeInfo} handleLogin={this.props.handleLogin} fetchloginStatus={this.props.fetchloginStatus}/>
            
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    clearSession: () => dispatch(logout())
    }
  }

  const mapStateToProps = state => {
    
    return {
        loginStatus: state.loginStatus
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(Directory);


     {/* <div onClick={this.props.onClick}>
            <NavLink 
                    to="/home" exact
                      >
                
                <button>Continue As Guest</button>
                </NavLink>
            </div> */}

            {/* <div >
            <NavLink 
                    to="/login" exact
                      >
                
                <button onClick={this.props.login}>Continue As Admin</button>
                </NavLink>
            </div> */}