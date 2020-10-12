const initialState = {
    planets:[],
    vehicles:[],
    selectedPlanets:['','','',''],
    selectedVehicles:['','','',''],
    findFalconeResult:{},
    token:'',
    result:{}
}


export default (state=initialState,action)=>{

    switch(action.type){
        case 'FETCH_PLANETS':
            return{...state, planets:action.payload}

        case 'FETCH_VEHICLES':
            return{...state, vehicles:action.payload}
        
        case 'STORE_SELECTED_PLANET':
            let selectedPlanets = [...state.selectedPlanets]
            selectedPlanets[action.index]=  action.planetName;
            return {...state,selectedPlanets:selectedPlanets}

        case 'STORE_SELECTED_VEHCILE':
            let selectedVehicles = [...state.selectedVehicles]
            let vehicles = [...state.vehicles];

            if(selectedVehicles[action.planetIndex]){

                let vehicleIndex =  vehicles.findIndex((x)=>{
                    
                    return x.name === selectedVehicles[action.planetIndex]
                })
                vehicles[vehicleIndex].total_no = state.vehicles[vehicleIndex].total_no + 1;
                
                
                
            }

            selectedVehicles[action.planetIndex]=  action.vehicleName;
           
            vehicles[action.index].total_no = state.vehicles[action.index].total_no - 1;

            return {...state,selectedVehicles:selectedVehicles,vehicles:vehicles}

        case 'GET_API_TOKEN':
            console.log(action.payload);
            return{...state, token:action.payload.token}

        case 'FIND_FALCONE':
            return{...state, result:action.payload}

        default:
            return state;
    }
}