// add the catsReducer
const scheduleReducer = (state = {games: []}, action) => {
    switch(action.type) {
        case 'LOADING_GAMES':
            return {
                ...state,
                games: [...state.games]
            }
        case 'ADD_GAMES':
            return {
                ...state,
                games: action.games
            }    
   
      default:
        return state;
    }
  }
  
  export default scheduleReducer; 