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
