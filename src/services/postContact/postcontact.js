import http from "../httpServis"

export const postContact = (addContact) => { 
    return http.post ( "/contacts" , addContact)
}