import React, { Component } from 'react';
import Schedule from '../components/Schedule';
import ScheduleInput from '../components/ScheduleInput';
import { connect } from 'react-redux';


class ScheduleContainer extends Component {
    render() {
        if(this.props.loginStatus){
            return(
                <div>
                <Schedule/> 
                <ScheduleInput/>
                </div>
            )
        }
        return (
            <div>
               <Schedule/> 
               {/* <ScheduleInput/> */}
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

export default connect(mapStateToProps)(ScheduleContainer);