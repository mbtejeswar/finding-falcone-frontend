import {fetchPlanets} from '../../api/api-client'
import {fetchVehicles} from '../../api/api-client'



export const fetchPlanetsAction = (dispatch)=>{
  
fetchPlanets()
  .then((res)=>{
    console.log(res.data);
      return dispatch({
        type: 'FETCH_PLANETS',
        payload:res.data
    }) 
  })
  .catch((err)=>console.log(err))
};

export const fetchVehiclesAction = (dispatch)=>{

fetchVehicles()
  .then((res)=>{
      return dispatch({
        type: 'FETCH_VEHICLES',
        payload:res.data
    }) 
  })
  .catch((err)=>console.log(err))

}

export const fetchToken = (dispatch)=>{
  fetchToken()
    .then((res)=>{
      return(dispatch({
        type:'GET_API_TOKEN',
        payload:res.data
      }))
      
    })
    .catch((err)=>{
      console.log(err)
    })
}