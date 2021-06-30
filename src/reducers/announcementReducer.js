const announcementReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_ANNOUNCEMENTS':
            return state

        case 'ADD_ANNOUNCEMENTS':
            return action.announcements

        case 'ADD_ANNOUNCEMENT':
            return [...state, action.announcement]
               
   
      default:
        return state;
    }
  }
  
  export default announcementReducer;