import React, { Component } from 'react';

class Directory extends Component {

    // handleClick = () => {
    //     this.props.active = false
    // }

    render() {
   
        return (
            <div onClick={this.props.onClick}>
                <button>Switch</button>
            </div>
        );
    }
}

export default Directory;