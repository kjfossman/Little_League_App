import React, { Component } from 'react';
import '../css_files/Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="main">
                <div className="each">
                {this.props.name} - {this.props.title}<br></br>
                {this.props.phone}<br></br>
                <a href={`mailto:${this.props.email}`}>email</a><br></br>
                <button>REMOVE CONTACT</button>
                </div>
                
            </div>
        );
    }
}

export default Contact;