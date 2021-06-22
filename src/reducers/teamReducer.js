
const initState = {teams: []}

const teamReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOADING_TEAMS':
            return {
                ...state,
                teams: [...state.teams]
            }
        case 'ADD_TEAMS':
            return {
                ...state,
                teams: action.teams
            }    
   
      default:
        return state;
    }
  }
  
  export default teamReducer; 