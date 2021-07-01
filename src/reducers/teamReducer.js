
const initState = {teams: []}

const teamReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_TEAMS':
            return state

        case 'ADD_TEAMS':
            return action.teams
        
        case 'ADD_PLAYER_TO_TEAM':
            const team = state.find(team => team.id == action.player.team_id)
            team.players.push(action.player)

            const index = state.findIndex(team => team.id == action.player.team_id)
            
            return [...state.slice(0, index), 
                {
                    team
                },
                ...state.slice(index + 1)]
            
   
      default:
        return state;
    }
  }
  
  export default teamReducer; 