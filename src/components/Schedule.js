import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

class Schedule extends Component {
    render() {
        return (
            <div>
                {Moment(this.props.games[0].date).format('MMMM: DD LT')}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        games: state.games
      }
}
export default connect(mapStateToProps)(Schedule);