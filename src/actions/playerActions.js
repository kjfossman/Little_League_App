import {url} from '../Url.js';


export const fetchPlayers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLAYERS'})

        fetch(heroku + "players", {withCredentials: true}).then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_PLAYERS', players: responseJSON})
        
    })
}
}



export const addPlayer = (formData) => {
    
    return (dispatch) => {
       
    fetch(heroku + "players", {withCredentials: true},{
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
               name: formData.name, 
               age: parseInt(formData.age),
               team_id: parseInt(formData.team),
               image: formData.image
            
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
     
           dispatch({type: 'ADD_PLAYER', player: responseJSON})
        //    dispatch({type: 'ADD_PLAYER_TO_TEAM', player: responseJSON})
       

    })
   }
}

export const deletePlayer = (id) => {
     
    return (dispatch) => {
        
    fetch(heroku + 'players/' + id, {withCredentials: true}, {
        method: "DELETE",
        // headers: {
        //    "Content-Type": "application/json",
           
        // },
    })
    // .then(result => result.json())
    .then(responseJSON => {
           
           dispatch({type: 'DELETE_PLAYER', player: id})
       

    })
   }
}