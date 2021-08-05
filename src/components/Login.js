import React, { Component } from 'react';

class Login extends Component {

    state = {
        username: '',
        password: '',
        errors: ''
    }

    handleOnSubmit = event => {  
        event.preventDefault();
        console.log('logged in?!?!')
      }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {username, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input onChange={this.handleChange} type="text" name="name" id="name"></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password"></input>
                    </div>
                    <input className='submit' type="submit" value="Login"></input>
                </form>
            </div>
        );
    }
}

export default Login;