import http from "../httpServis"

export const postContact = (newContact) => { 
    return http.post ( "/contacts" , newContact)
}