const initialState = {
    planets:[],
    vehicles:{},
    findFalconeResult:{}
}


export default (state=initialState,action)=>{

    switch(action.type){
        case 'FETCH_PLANETS':
            console.log("Hi")
            return{...state, planets:action.payload}
        default:
            return state;
    }
}