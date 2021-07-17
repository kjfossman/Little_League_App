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


export const addContact = (formData) => {
     
    return (dispatch) => {
    fetch("http://localhost:3000/contacts",{
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
               name: formData.name, 
               title: formData.title,
               phone: formData.phone,
               email: formData.email,
           
         
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
           
           dispatch({type: 'ADD_CONTACT', contact: responseJSON})
       

    })
   }
}