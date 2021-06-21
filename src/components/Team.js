import React, { Component } from 'react';
import { connect } from 'react-redux';


class Team extends Component {


    handleClick = (event) => {
        console.log(event)
        let testing = this.props.teams.find(team => team.name === event.target.innerText)
        console.log(testing)
    }

    render() {

        let teams = this.props.teams.map(team => <div onClick={this.handleClick}>{team.name}</div>)
     
        return (
            
            <div>
                {teams}
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams.teams
      }
}
export default connect(mapStateToProps)(Team);
