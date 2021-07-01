const announcementReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_ANNOUNCEMENTS':
            return state

        case 'ADD_ANNOUNCEMENTS':
            return action.announcements

        case 'ADD_ANNOUNCEMENT':
            return [action.announcement, ...state]
               
   
      default:
        return state;
    }
  }
  
  export default announcementReducer;