import axios from 'axios';

const endpoint = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : 'https://findfalcone.herokuapp.com/'

// export const {
//   getAllProducts () {
//       return axios.get(endpoint + 'products').then(response => {
//         log.debug(`api client fetched ${response.data.length} items`)
//         return response.data
//       }).catch(err => {
//         log.error(err.message)
//         throw err
//       })
//     } 
//   }



  export const fetchPlanets = () =>{
    return axios.get(`${endpoint}planets`);
  };
  export const fetchVehicles = () =>{
    return axios.get('https://findfalcone.herokuapp.com/vehicles');
  };

