import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from '../components/Announcement.js'
import AnnouncementEdit from '../components/AnnouncementEdit.js';
import AnnouncementForm from '../components/AnnouncementForm.js';

class AnnouncementsContainer extends Component {

    state = {
        active: false,
        object: ''
    }

    test = (a) => {
        console.log('handleClick')
        const ann = this.props.announcements.find(x => x.id == a.currentTarget.id)
        this.setState(prevState => ({
            active: !prevState.active,
            object: ann
        }))
   
    }

    reset = (e) => {
        console.log('reset')
        this.setState({
            active: false
        })
        e.stopPropagation()
    }

    render() {
        console.log(this.state.object)
        let announcements = this.props.announcements.map(a => <Announcement  reset={this.reset} onClick={this.test} key={a.id} id={a.id} announcement={a} />)
        if(this.props.loginStatus){
            return(
                <div>
                {announcements}
                <div>
                    {this.state.active ? <AnnouncementEdit announcement={this.state.object}/> : <AnnouncementForm />}
                </div>
            
            </div>
            )
        }
        return (
            <div>
                {announcements}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        announcements: state.announcements,
        loginStatus: state.loginStatus
      }
}
export default connect(mapStateToProps)(AnnouncementsContainer);


  