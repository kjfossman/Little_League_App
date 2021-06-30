import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnnouncement } from '../actions/announcementActions.js'
import '../css_files/Announcement.css';

class AnnouncementForm extends Component {

    state = {
        subject: '',
        content: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.postAnnouncement(this.state)
        this.setState({
            subject: '',
            content: ''
        })
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
       })
    }

    render() {
        return (
            <div className="block">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="subject-form">
                    <label htmlFor='Subject'>Subject:</label>
                    <input onChange={this.handleChange} type="text" name="subject" id="subject" value={this.state.subject}></input>
                    </div>
                    
                    <div className="content-form">
                    <label htmlFor='content'>Content:</label>
                    <textarea onChange={this.handleChange} type="text" name='content' id='content' value={this.state.content}></textarea><br></br>  
                    </div>
                    <input className='submit' type="submit" value="Post"></input>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postAnnouncement: (formData) => {
            dispatch(addAnnouncement(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        announcements: state.announcements
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);