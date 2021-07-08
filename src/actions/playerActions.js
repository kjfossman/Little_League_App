export const fetchPlayers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})

        fetch("http://localhost:3000/players").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_PLAYERS', players: responseJSON})
        
    })
}
}



export const addPlayer = (formData) => {
    
    return (dispatch) => {
       
    fetch("http://localhost:3000/players",{
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
               name: formData.name, 
               age: parseInt(formData.age),
               team_id: parseInt(formData.team)
            
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
     
           dispatch({type: 'ADD_PLAYER', player: responseJSON})
        //    dispatch({type: 'ADD_PLAYER_TO_TEAM', player: responseJSON})
       

    })
   }
}