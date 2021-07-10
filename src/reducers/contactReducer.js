const contactReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_CONTACTS':
            return state

        case 'ADD_CONTACTS':
            // debugger 
            return action.contacts

        // case 'ADD_ANNOUNCEMENT':
        //     return [action.announcement, ...state]
   
      default:
        return state;
    }
  }
  
  export default contactReducer;