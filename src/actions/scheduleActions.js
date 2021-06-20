    export const fetchGames = () => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_GAMES'})
            console.log('loading')

            fetch("http://localhost:3000/games").then(response =>
        {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_GAMES', games: responseJSON})
            
        })
    }
}

// dispatch({type: 'ADD_GAMES', games: responseJSON})