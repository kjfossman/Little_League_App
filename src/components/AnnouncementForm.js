import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnnouncement } from '../actions/announcementActions.js'

class AnnouncementForm extends Component {

    state = {
        subject: '',
        content: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        this.props.postAnnouncement(this.state)
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, (state) => {console.log(this.state)})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label htmlFor='Subject'>Subject:</label>
                    <input onChange={this.handleChange} type="text" name="subject" id="subject"></input>
                    
              
                    <label htmlFor='content'>Content:</label>
                    <input onChange={this.handleChange} type="text" name='content' id='content'></input><br></br>  
                    
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