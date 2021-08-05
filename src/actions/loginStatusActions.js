import axios from "axios";

  export const loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', 
   {withCredentials: false,  headers: {'Access-Control-Allow-Origin': 'http://localhost:3001', 'Content-Type': 'application/json'}})    
    .then(response => {
      debugger
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };