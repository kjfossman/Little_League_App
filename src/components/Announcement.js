import React, { Component } from 'react';
import '../css_files/Announcement.css';
import Moment from 'moment';
import AnnouncementForm from './AnnouncementForm';



class Announcement extends Component {

    state = {
        active: false 
    }

    handleClick = () => {
        this.setState(prevState => ({
            active: !prevState.active,
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}className="box">
                <div>
                {"DATE: "}
                {Moment(this.props.announcement.updated_at).format('MMMM DD,  LT')}
                </div>
                <div>
                <u><strong>{"SUBJECT: "}{this.props.announcement.subject}</strong></u>
                
                </div>
                
                <em>{this.props.announcement.content}</em>
                
                {/* <div>
                    {this.state.active ? <AnnouncementForm /> : ''}
                </div> */}
            </div>
        );
    }
}

export default Announcement;