import {url} from '../Url.js';

import axios from "axios";

  export const fetchloginStatus = () => {
      
      return (dispatch) => {
    axios.get('http://localhost:3000/logged_in', 
   {withCredentials: true})    
    .then(response => {
      
      if (response.data.logged_in) {
        dispatch({type: 'CHANGE_STATUS', logged_in: response.data.logged_in})
        // this.handleLogin(response)
      } else {
        dispatch({type: 'CHANGE_STATUS', logged_in: response.data.logged_in})
        // this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }};


  export const logout = () => {
    
      return (dispatch) => {
        
      
          axios.post('http://localhost:3000/logout', {},
    
          {withCredentials: true, origin: 'http://localhost:3001'})
          
          .then(response => {
              debugger
            dispatch({type: 'LOGOUT', logged_out: response.data.logged_out})
              
          })
      }}
  


         

//   axios.post('http://localhost:3000/login', {user}, {
//     withCredentials: true, origin: 'http://localhost:3001'}
//     // headers: {'Access-Control-Allow-Origin': 'http://localhost:3001', 'Content-Type': 'application/json'
// )

//     .then(response => {
        
//     if (response.data.logged_in) {
//         this.props.handleLogin(response.data)
//         this.props.fetchloginStatus()
//         this.redirect()
//     } else {
//         this.setState({
//         errors: response.data.errors
//         })
//     }
//     })
//     .catch(error => console.log('api errors:', error))
// };
//   export const fetchloginStatus = () => {
      
//     return (dispatch) => {
//         dispatch({ type: 'LOGIN_STATUS'})

//         fetch("http://localhost:3000/logged_in").then(response =>
//     {
//         debugger
//         return response.json()
//     }).then(responseJSON => {
//         debugger
//         dispatch({type: 'CHANGE_STATUS', logged_in: responseJSON.logged_in})
        
//     })
// }
// }
