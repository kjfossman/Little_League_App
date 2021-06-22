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

 export const addGame = (formData) => {
     debugger
     fetch("http://localhost:3000/games",{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({
             home_team_id: 2,
             away_team_id: 1,
             date: formData.date,
             home_team_score: formData.home_team_score,
             away_team_score: formData.away_team_score
         })
     })
     .then(result => result.json())
     .then(responsJSON => {
        return {
            type: 'ADD_GAME', games: responsJSON
        }

     })
  
 }

// dispatch({type: 'ADD_GAMES', games: responseJSON})