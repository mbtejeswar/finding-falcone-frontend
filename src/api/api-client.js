import axios from './axios';

  export const fetchPlanets = () =>{
    return axios.get(`/planets`);
  };
  export const fetchVehicles = () =>{
    return axios.get(`/vehicles`);
  };

  export const fetchToken = ()=>{
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return axios.post(`/token`,{});
  }
  export const findFalcone = (requestPayload)=>{  
    return axios.post(`/find`,requestPayload);
  }

