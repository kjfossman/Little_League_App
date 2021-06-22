    export const fetchGames = () => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_GAMES'})

            fetch("http://localhost:3000/games").then(response =>
        {
            return response.json()
        }).then(responseJSON => {
            console.log(responseJSON)
            dispatch({type: 'ADD_GAMES', games: responseJSON})  
        })
    }
}

    export const fetchTeams = () => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_TEAMS'})
            console.log('loading')

            fetch("http://localhost:3000/teams").then(response =>
        {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_TEAMS', teams: responseJSON})
            
        })
    }
 }

 export const addGame = (game) => {
     return {
         type: 'ADD_GAME',
         game
     }
 }

// dispatch({type: 'ADD_GAMES', games: responseJSON})