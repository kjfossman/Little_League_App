import React, { Component } from 'react';
import Schedule from '../components/Schedule';
import ScheduleInput from '../components/ScheduleInput';



class ScheduleContainer extends Component {
    render() {
        return (
            <div>
               <Schedule/> 
               <ScheduleInput/>
            </div>
        );
    }
}

export default ScheduleContainer;