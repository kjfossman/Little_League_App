const announcementReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_ANNOUNCEMENTS':
            return state

        case 'ADD_ANNOUNCEMENTS':
            return action.announcements

        case 'ADD_ANNOUNCEMENT':
            return [action.announcement, ...state]

        case 'UPDATE_ANNOUNCEMENT':
          debugger
            const index = state.findIndex(a => a.id === action.announcement.id)
            
            return  [action.announcement, ...state.slice(0, index), ...state.slice(index+1)]
            // [...state.slice(0, index), 
            //         {
            //             ...action.announcement
            //         },
            //         ...state.slice(index + 1)]
               
   
      default:
        return state;
    }
  }
  
  export default announcementReducer;