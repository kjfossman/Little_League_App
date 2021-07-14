import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import '../css_files/Contact.css';


class ContactsContainer extends Component {

    
    render() {

        let contacts = this.props.contacts.map(contact => <Contact key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} title={contact.title}/>)
        console.log(this.props)
        return (
            <div>
                <div className="container">
                {contacts}
                </div>
                <ContactForm/>
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
