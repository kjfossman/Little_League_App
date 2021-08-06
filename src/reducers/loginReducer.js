const loginReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN_STATUS':
            
            return state

        case 'CHANGE_STATUS':
            
            if (action.logged_in){
                return action.logged_in
            }
            else{
                return state
            }
            

      default:
        return state;
    }
  }
  
  export default loginReducer;