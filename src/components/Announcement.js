import React, { Component } from 'react';
import '../css_files/Announcement.css';
import Moment from 'moment';

class Announcement extends Component {

    render() {
        return (
            <div className="box">
                <div>
                {Moment.parseZone(this.props.announcement.updated_at).format('MMMM DD,  LT')}
                </div>
                <div>
                {this.props.announcement.subject}
                
                </div>
                
                {this.props.announcement.content}
            </div>
        );
    }
}

export default Announcement;