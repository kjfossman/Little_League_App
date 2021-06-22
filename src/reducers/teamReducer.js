
const initState = {teams: []}

const teamReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_TEAMS':
            return state

        case 'ADD_TEAMS':
            return action.teams
               
   
      default:
        return state;
    }
  }
  
  export default teamReducer; 