import React, { Component } from 'react';
import '../css_files/Announcement.css';
import Moment from 'moment';
import AnnouncementForm from './AnnouncementForm';
import { connect } from 'react-redux';
import { deleteAnnouncement } from '../actions/announcementActions';


class Announcement extends Component {

    state = {
        active: false 
    }

    handleClick = (e) => {
        this.setState(prevState => ({
            active: !prevState.active,
        }))
    }

    handleClickButton = (e_ => {
        console.log("delete ann")
        this.props.removeAnnouncement(this.props.announcement.id)
    })

    render() {
        console.log(this.props.loginStatus)
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
                <div className="remove">
                    {this.props.loginStatus && 
                <button onClick={this.handleClickButton}>REMOVE ANNOUNCMENT</button>}
                </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeAnnouncement: (formData) => {
            dispatch(deleteAnnouncement(formData))
        }
    }
}

const mapStateToProps = state => {
    
    return {
        loginStatus: state.loginStatus
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);