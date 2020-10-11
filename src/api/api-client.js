import axios from 'axios';

const endpoint = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'https://findfalcone.herokuapp.com'

  export const fetchPlanets = () =>{
    return axios.get(`${endpoint}/planets`);
  };
  export const fetchVehicles = () =>{
    return axios.get(`${endpoint}/vehicles`);
  };

  export const fetchToken = ()=>{
    return axios.get(`${endpoint}/token`);
  }
  export const findFalcone = (token,selectedPlanets,selectedVehicles)=>{
    return axios.post(`${endpoint}/findFalcone`);
  }

