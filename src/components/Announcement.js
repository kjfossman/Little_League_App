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

    handleClickButton = (e => {
        this.props.removeAnnouncement(this.props.announcement.id),
        this.props.reset(e)
    })

    render() {
        
        return (
            <div onClick={this.props.onClick} id={this.props.announcement.id} key={this.props.announcement.id} className="box">
                <div className="block-remove">
                <div>
                {"DATE: "}
                {Moment(this.props.announcement.updated_at).format('MMMM DD,  LT')}
                </div>
                <div className="remove">
                    {this.props.loginStatus && 
                <button onClick={this.handleClickButton}>REMOVE ANNOUNCMENT</button>}
                </div>
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