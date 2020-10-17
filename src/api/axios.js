import axios from 'axios';

const instance = axios.create({
    baseURL:'https://findfalcone.herokuapp.com'
})


export default instance;