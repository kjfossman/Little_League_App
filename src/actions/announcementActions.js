import {url} from '../Url.js';
import { heroku } from '../Url.js';

export const fetchAnnouncements = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANNOUNCEMENTS'})

        fetch(heroku + "announcements").then(response =>
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'ADD_ANNOUNCEMENTS', announcements: responseJSON})
        
    })
}
}

export const addAnnouncement = (formData) => {
    return (dispatch) => {
    fetch(heroku + "announcements", {withCredentials: true},{
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
               subject: formData.subject, 
               content: formData.content,
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
           dispatch({type: 'ADD_ANNOUNCEMENT', announcement: responseJSON})
       
 
    })
   }
 }
    
 export const updateAnnouncement = (formData) => {
    return (dispatch) => {
    fetch(heroku + `announcements/${formData.id}`, {withCredentials: true},{
        method: "PATCH",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
            subject: formData.subject, 
            content: formData.content,
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
     
           dispatch({type: 'UPDATE_ANNOUNCEMENT', announcement: responseJSON})
       

    })
   }
}

export const deleteAnnouncement = (id) => {
     
    return (dispatch) => {
        
    fetch(heroku + 'announcements/' + id, {withCredentials: true}, {
        method: "DELETE",
        // headers: {
        //    "Content-Type": "application/json",
           
        // },
    })
    // .then(result => result.json())
    .then(responseJSON => {
           
           dispatch({type: 'DELETE_ANNOUNCEMENT', announcement: id})
       

    })
   }
}