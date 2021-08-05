// import axios from "axios";

//   export const loginStatus = () => {
//       return (dispatch) => {
//           dispatch({type: 'LOGIN_STATUS'})
//       }
//     axios.get('http://localhost:3000/logged_in', 
//    {withCredentials: false,  headers: {'Access-Control-Allow-Origin': 'http://localhost:3001', 'Content-Type': 'application/json'}})    
//     .then(response => {
//       debugger
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   };

  export const loginStatus = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_STATUS'})

        fetch("http://localhost:3000/logged_in").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'CHANGE_STATUS', logged_in: responseJSON})
        
    })
}
}