    export const fetchGames = () => {
        return (dispatch) => {
            dispatch({ type: 'ADD_GAMES'})

            fetch("http://localhost:3000/games").then(response =>
        {
            return response.json()
        }).then(responseJSON => {
            console.log(responseJSON)
            
        })
    }
}

// dispatch({type: 'ADD_GAMES', games: responseJSON})