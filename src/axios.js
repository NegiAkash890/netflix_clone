import axios from 'axios'

//For API we need Secret Key to authenticate us at the server

const instance = axios.create({

    baseURL : "https://api.themoviedb.org/3"
})
export default instance 