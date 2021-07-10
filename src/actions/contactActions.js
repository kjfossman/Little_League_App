export const fetchContacts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CONTACTS'})

        fetch("http://localhost:3000/contacts").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_CONTACTS', contacts: responseJSON})
    })
}
}