import axios from "axios";


axios.defaults.baseURL = ("https://fake-server-contactlist-app.herokuapp.com/") ; 

const http = { 
    get : axios.get ,
    post :axios.post , 
    delete :axios.delete , 
    put : axios.put 
}

export default http ;


