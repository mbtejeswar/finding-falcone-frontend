import axios from 'axios';

const endpoint = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'https://findfalcone.herokuapp.com'

  export const fetchPlanets = () =>{
    return axios.get(`${endpoint}/planets`);
  };
  export const fetchVehicles = () =>{
    return axios.get(`${endpoint}/vehicles`);
  };

  export const fetchToken = ()=>{
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return axios.post(`${endpoint}/token`,{});
  }
  export const findFalcone = (requestPayload)=>{
    
    
    return axios.post(`${endpoint}/find`,requestPayload);
  }

