import React, { Component } from 'react';
import '../css_files/Announcement.css';
import Moment from 'moment';
import AnnouncementForm from './AnnouncementForm';



class Announcement extends Component {

    state = {
        active: false 
    }

    handleClick = (e) => {
        this.setState(prevState => ({
            active: !prevState.active,
        }))
    }

    render() {
        return (
            <div onClick={this.props.onClick} id={this.props.announcement.id} key={this.props.announcement.id} className="box">
                <div>
                {"DATE: "}
                {Moment(this.props.announcement.updated_at).format('MMMM DD,  LT')}
                </div>
                <div>
                <u><strong>{"SUBJECT: "}{this.props.announcement.subject}</strong></u>
                
                </div>
                <div className="textbox">
                <em>{this.props.announcement.content}</em>
                </div>
            </div>
        );
    }
}

export default Announcement;