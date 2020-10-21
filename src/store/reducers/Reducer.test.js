import * as actions from '../actions/actionTypes';

import Reducer from '../reducers/Reducer';


describe('Default reducer', ()=>{
    it('should return default state',()=>{
        const newState = Reducer(undefined, {});
        expect(newState).toEqual(   { planets:[],
            vehicles:[],
            selectedPlanets:['','','',''],
            selectedVehicles:['','','',''],
            findFalconeResult:{},
            token:'',
            result:{}})
    })
})

describe('FETCH_PLANETS reducer', ()=>{
    it('should store planets in state',()=>{
        const newState = Reducer(undefined, {type:actions.FETCH_PLANETS, payload:['TestPlanet1','TestPlanet2' ]});
        expect(newState).toEqual(   { planets:['TestPlanet1','TestPlanet2' ],
            vehicles:[],
            selectedPlanets:['','','',''],
            selectedVehicles:['','','',''],
            findFalconeResult:{},
            token:'',
            result:{}})
    })
})

describe('FETCH_VEHICLES reducer', ()=>{
    it('should store vehicles in state',()=>{
        const newState = Reducer(undefined, {type:actions.FETCH_VEHICLES, payload:['TestVehicle1','TestVehicle2' ]});
        expect(newState).toEqual(   { planets:[],
            vehicles:['TestVehicle1','TestVehicle2' ],
            selectedPlanets:['','','',''],
            selectedVehicles:['','','',''],
            findFalconeResult:{},
            token:'',
            result:{}})
    })
})