import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.email}
                {this.props.phone}
                
            </div>
        );
    }
}

export default Contact;