import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from '../components/Announcement.js'

class AnnouncementsContainer extends Component {
    render() {

        let announcements = this.props.announcements.map(a => <Announcement key={a.id} announcement={a} />)
        return (
            <div>
                {announcements}
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