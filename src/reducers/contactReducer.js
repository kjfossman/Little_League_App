const contactReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_CONTACTS':
            return state

        case 'ADD_CONTACTS':
            // debugger 
            return action.contacts

        case 'ADD_CONTACT':
            return [...state, action.contact]

        case 'DELETE_CONTACT':
            return [action.contact]
   
      default:
        return state;
    }
  }
  
  export default contactReducer;