import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        errors: ''
    }
}

    
    
    handleOnSubmit = event => {  
        event.preventDefault();
        const {username, password} = this.state
        let user = {
            username: username, 
            password: password
        }
        

        axios.post('http://localhost:3000/login', {user}, {
            withCredentials: false, 
            headers: {'Access-Control-Allow-Origin': 'http://localhost:3001', 'Content-Type': 'application/json'
    }})
       
            .then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                errors: response.data.errors
                })
            }
            })
            .catch(error => console.log('api errors:', error))
        };
        redirect = () => {
            this.props.history.push('/')
        }
        handleErrors = () => {
            return (
            <div>
                <ul>
                {this.state.errors.map(error => {
                return <li key={error}>{error}</li>
                })}
                </ul>
            </div>
            )
            
        };
            
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {username, password} = this.state
        console.log(this.props.handleLogin)
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input onChange={this.handleChange} type="text" name="username" id="name" value={username}></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" value={password}></input>
                    </div>
                    <input className='submit' type="submit" value="Login"></input>
                </form>
            </div>
        );
    }
}

export default Login;