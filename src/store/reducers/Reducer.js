import * as actions from '../actions/actionTypes';


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
        case actions.FETCH_PLANETS:
            return{...state, planets:action.payload}

        case actions.FETCH_VEHICLES:
            return{...state, vehicles:action.payload}
        
        case actions.STORE_SELECTED_PLANET:
            let selectedPlanets = [...state.selectedPlanets]
            selectedPlanets[action.index]=  action.planetName;
            var selectedVehicles = [...state.selectedVehicles];
            if(selectedVehicles[action.index]){
                var vehicles = [...state.vehicles];
                var vehicleIndex =  vehicles.findIndex((x)=>{                   
                    return x.name === selectedVehicles[action.index]
                })
                vehicles[vehicleIndex].total_no = state.vehicles[vehicleIndex].total_no + 1;   
                selectedVehicles[action.index] = '';
            }
            return {...state,selectedPlanets:selectedPlanets, selectedVehicles:selectedVehicles}

        case actions.STORE_SELECTED_VEHCILE:
             selectedVehicles = [...state.selectedVehicles]
             vehicles = [...state.vehicles];
            if(selectedVehicles[action.planetIndex]){
                 vehicleIndex =  vehicles.findIndex((x)=>{                   
                    return x.name === selectedVehicles[action.planetIndex]
                })
                vehicles[vehicleIndex].total_no = state.vehicles[vehicleIndex].total_no + 1;    
            }
            selectedVehicles[action.planetIndex]=  action.vehicleName;
            vehicles[action.index].total_no = state.vehicles[action.index].total_no - 1;
            return {...state,selectedVehicles:selectedVehicles,vehicles:vehicles}

        case actions.GET_API_TOKEN:
            return{...state, token:action.payload.token}

        case actions.FIND_FALCONE:
            return{...state, result:action.payload}

        case actions.RESET:
            selectedVehicles = [...state.selectedVehicles];
            vehicles = [...state.vehicles];
            selectedVehicles.forEach((vehicle,index)=>{
                if(selectedVehicles[index]){
                
                    var vehicleIndex =  vehicles.findIndex((x)=>{                   
                        return x.name === selectedVehicles[index]
                    })
                    vehicles[vehicleIndex].total_no = state.vehicles[vehicleIndex].total_no + 1;   

                }
            })
            
            return{...state, selectedPlanets:['','','',''], selectedVehicles:['','','',''],result:{},vehicles:vehicles};

        default:
            return state;
    }
}