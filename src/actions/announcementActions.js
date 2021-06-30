export const fetchAnnouncements = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANNOUNCEMENTS'})

        fetch("http://localhost:3000/announcements").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_ANNOUNCEMENTS', announcements: responseJSON})
        
    })
}
}