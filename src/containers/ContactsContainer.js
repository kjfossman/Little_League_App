import React, { Component } from 'react';
import { connect } from 'react-redux';


class ContactsContainer extends Component {

    
    render() {
        
        return (
            <div>
                {this.props.contacts[0].name}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        contacts: state.contacts
      }
}
export default connect(mapStateToProps)(ContactsContainer);
