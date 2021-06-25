
const playerReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_PLAYERS':
            return state

        case 'ADD_PLAYERS':
            return action.players

        case 'ADD_PLAYER':
            return [...state, action.player]
               
   
      default:
        return state;
    }
  }
  
  export default playerReducer; 