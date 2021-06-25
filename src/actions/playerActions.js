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
            
               name: parseInt(formData.home_team), 
               age: parseInt(formData.away_team),
               team: formData.date
            
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
           debugger
           dispatch({type: 'ADD_PLAYER', player: responseJSON})
       

    })
   }
}