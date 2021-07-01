import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from '../components/Announcement.js'
import AnnouncementForm from '../components/AnnouncementForm.js';

class AnnouncementsContainer extends Component {

    state = {
        active: false
    }

    test = () => {
        this.setState(prevState => ({
            active: !prevState.active,
        }))
        console.log("I was clicked")
    }

    render() {

        let announcements = this.props.announcements.map(a => <div onClick={this.test} key={a.id}><Announcement  key={a.id} announcement={a} /></div>)
        
        return (
            <div>
                {announcements}
                <div>
                    {this.state.active ? <AnnouncementForm /> : ''}
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        announcements: state.announcements
      }
}
export default connect(mapStateToProps)(AnnouncementsContainer);