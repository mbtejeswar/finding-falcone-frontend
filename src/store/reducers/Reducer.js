const initialState = {
    planets:[],
    vehicles:[],
    selectedPlanets:['','','',''],
    selectedVehicles:['','','',''],
    findFalconeResult:{}
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

        case 'STORE_SELECTED_VEHICLE':
            let selectedVehicles = [...state.selectedVehicles]
            selectedVehicles[action.index]=  action.vehicleName;
            // let vehicles = {...state.vehicles}
            return {...state,selectedVehicles:selectedVehicles}

        default:
            return state;
    }
}