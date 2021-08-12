import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contactActions';

import '../css_files/Contact.css';
class Contact extends Component {
    
    handleClick = () => {
        this.props.removeContact(this.props.id)
    }

    // componentDidMount(){
    //     this.props.removeContact(this.props.id)
    // }
    
    render() {
        if(this.props.loginStatus){
            return (
                <div className="main">
                    <div className="each">
                    {this.props.name} - {this.props.title}<br></br>
                    {this.props.phone}<br></br>
                    <a href={`mailto:${this.props.email}`}>email</a><br></br>
                    <button onClick={this.handleClick}>REMOVE CONTACT</button>
                    </div>
                    
                </div>
            )
        }
        return (
            <div className="main">
                <div className="each">
                {this.props.name} - {this.props.title}<br></br>
                {this.props.phone}<br></br>
                <a href={`mailto:${this.props.email}`}>email</a><br></br>
                {/* <button onClick={this.handleClick}>REMOVE CONTACT</button> */}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeContact: (formData) => {
            dispatch(deleteContact(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        contacts: state.contacts, 
        loginStatus: state.loginStatus
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact);

