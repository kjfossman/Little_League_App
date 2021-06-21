// add the catsReducer
const scheduleReducer = (state = [], action) => {
  
    switch(action.type) {
        case 'LOADING_GAMES':
            return state
                
        
        case 'ADD_GAMES':
            return action.games
            
        // case 'ADD_GAME': 
        //     return [...state, action.game]  

      default:
        return state
    }
  }
  
  export default scheduleReducer; 

//   return {
//     ...state,
//     games: action.games
// }    