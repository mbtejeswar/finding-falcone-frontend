import {fetchPlanets,fetchVehicles,fetchToken,findFalcone} from '../../api/api-client'




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

export const fetchTokenAction = (dispatch)=>{

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


export const findFalconeAction = (requestPayload,dispatch)=>{
  console.log(requestPayload);
  findFalcone(requestPayload)
  .then((res)=>{
    return(dispatch({
      type:'FIND_FALCONE',
      payload:res.data
    }))
  })
  .catch((err)=>{
    console.log(err);
  })

}