const loginReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN_STATUS':
            
            return state

        case 'CHANGE_STATUS':
            
            return action.logged_in

        case 'LOGOUT':
            
            if(action.logged_out === true){
                return false
            }
            else{
                return state 
            }
            

      default:
        return state;
    }
  }
  
  export default loginReducer;