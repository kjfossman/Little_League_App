const loginReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN_STATUS':
            
            return state

        case 'CHANGE_STATUS':
            debugger
            return action.logged_in

      default:
        return state;
    }
  }
  
  export default loginReducer;