import React, { Component } from 'react';
import { connect } from 'react-redux';
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

                    // <form onSubmit={this.handleOnSubmit}>
                    // <div>
                    // <label htmlFor='player_name'>Player Name:</label>
                    // <input onChange={this.handleChange} type="text" name="name" id="name"></input>
                    // </div>

                    // <label htmlFor='age'>Age:</label>
                    // <input onChange={this.handleChange} type="number" min="7" max="14" name='age' id='age'></input><br></br>  
                    // <label htmlFor='team'>Team:</label>
                    // <select onChange={this.handleChange} name='team' id='team'>
                    //     <option key="default">Please Select Team</option>
                    // {teamInputs}
                    // </select><br></br>

                    // <input className='submit' type="submit" value="Add Player"></input>
                    // </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        submitContact: (formData) => {
            dispatch(addGContact(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        contacts: state.contacts, 
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

