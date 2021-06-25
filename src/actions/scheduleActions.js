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



 export const addGame = (formData) => {
     
     return (dispatch) => {
     fetch("http://localhost:3000/games",{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            
         },
         body: JSON.stringify({
             
                home_team_id: parseInt(formData.home_team), 
                away_team_id: parseInt(formData.away_team),
                date: formData.date,
                home_team_score: formData.home_team_score,
                away_team_score: formData.away_team_score
            
          
         })
     })
     .then(result => result.json())
     .then(responseJSON => {
            debugger
            dispatch({type: 'ADD_GAME', game: responseJSON})
        

     })
    }
 }



 export const updateGame = (formData) => {
     
    return (dispatch) => {
    fetch(`http://localhost:3000/games/${formData.game_id}`,{
        method: "PATCH",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
               home_team_id: parseInt(formData.home_team), 
               away_team_id: parseInt(formData.away_team),
               date: formData.date,
               home_team_score: formData.home_team_score,
               away_team_score: formData.away_team_score
           
         
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
        
           dispatch({type: 'UPDATE_GAME', game: responseJSON})
       

    })
   }
}

// dispatch({type: 'ADD_GAMES', games: responseJSON})