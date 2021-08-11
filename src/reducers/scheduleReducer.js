
const scheduleReducer = (state = [], action) => {
  
    switch(action.type) {
        case 'LOADING_GAMES':
            return state
                
        
        case 'ADD_GAMES':
            return action.games
            
        case 'ADD_GAME': 
            return [...state, action.game] 
            
        case 'UPDATE_GAME':
            
            const index = state.findIndex(game => game.id === action.game.id)
            
            return [...state.slice(0, index), 
                    {
                        ...action.game
                    },
                    ...state.slice(index + 1)]
        
        case 'DELETE_GAME':
            const index2 = state.findIndex(c => c.id === action.game)
            state.splice(index2, 1)
            return [...state]

      default:
        return state
    }
  }
  
  export default scheduleReducer; 

//   return {
//     ...state,
//     games: action.games
// }    