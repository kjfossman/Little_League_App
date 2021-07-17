import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactActions';

import '../css_files/Contact.css';

class ContactForm extends Component {

    state = {
        name: '',
        title: '',
        phone: '',
        email: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.submitContact(this.state)
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, (state) => {console.log(this.state)})
    }

    render() {
        return (
            <div>
                <form className="contact-form" onSubmit={this.handleOnSubmit}>
                    <div className="label">
                    <label htmlFor='contact_name'>Contact Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name"></input>
                    </div>

                    <div className="label">
                    <label htmlFor='contact_title'>Contact Title:</label>
                    <input onChange={this.handleChange} type="text" name="title" id="title"></input>
                    </div>

                    <div className="label">
                    <label htmlFor='contact_phone'>Contact Phone:</label>
                    <input onChange={this.handleChange} type="text" name="phone" id="phone"></input>
                    </div>

                    <div className="label">
                    <label htmlFor='contact_email'>Contact Email:</label>
                    <input onChange={this.handleChange} type="text" name="email" id="email"></input>
                    </div>

                    <input className='submit' type="submit" value="Add Contact"></input>

                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        submitContact: (formData) => {
            dispatch(addContact(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        contacts: state.contacts, 
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

