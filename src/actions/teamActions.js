import {url} from '../Url.js'; 


export const fetchTeams = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_TEAMS'})
        console.log('loading')

        fetch(url + "teams").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_TEAMS', teams: responseJSON})
        
    })
}
}