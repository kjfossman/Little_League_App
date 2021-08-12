import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import '../css_files/Contact.css';


class ContactsContainer extends Component {

    
    render() {

        let contacts = this.props.contacts.map(contact => <Contact key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} title={contact.title} id={contact.id}/>)
        console.log(this.props)
        if(this.props.loginStatus){
            return (
                <div>
                    <div className="container">
                    {contacts}
                    </div>
                    <ContactForm/>
                </div>
            );
        }
        return (
            <div>
                <div className="container">
                {contacts}
                </div>
                <div className="batter">
                <img src="https://www.buildingromeseries.com/wp-content/uploads/2020/12/inside_pitch-249x300.jpg"></img>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        contacts: state.contacts,
        loginStatus: state.loginStatus
      }
}
export default connect(mapStateToProps)(ContactsContainer);
