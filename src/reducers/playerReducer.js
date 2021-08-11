
const playerReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_PLAYERS':
            return state

        case 'ADD_PLAYERS':
            return action.players

        case 'ADD_PLAYER':
            return [...state, action.player]
            
        case 'DELETE_PLAYER':
            const index = state.findIndex(p => p.id === action.player)
            state.splice(index, 1)
            return [...state]
   
      default:
        return state;
    }
  }
  
  export default playerReducer; 