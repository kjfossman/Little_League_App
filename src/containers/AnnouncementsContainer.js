import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from '../components/Announcement.js'
import AnnouncementEdit from '../components/AnnouncementEdit.js';
import AnnouncementForm from '../components/AnnouncementForm.js';
import '../css_files/Announcement.css';


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
                <div className="quote">
                    <img src="https://i.pinimg.com/564x/47/63/a0/4763a07b912c7208a1769b68beccbe68.jpg"></img>
                </div>
                <div className="quote2">
                <img src="https://jokermag.com/wp-content/uploads/2021/02/Andrew-Benintendi-Inspiring-Baseball-Quote.png" width='300' height='300'></img>
                </div>
                <div className="quote3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0w3QkT3JtcCtwDzrt2d89AOJLxoA0xoQFA&usqp=CAU"></img>
                </div>
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


  