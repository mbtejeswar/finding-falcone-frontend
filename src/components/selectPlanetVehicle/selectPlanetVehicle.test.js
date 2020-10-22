import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPlanetVehicle from './selectPlanetVehicle';
import {testStore} from '../../utils/index'



configure({adapter:new Adapter()});

const setUp = (initialState)=>{
    const store = testStore(initialState);
    const wrapper = shallow(<SelectPlanetVehicle planetindex = {0} store={store}/>) 
    return wrapper;
}


describe('check whether selectPlanetVehicle is rendered without errors', ()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            planets:[{name:'Donlon', Distance:100}, {name:'Jebing', Distance:200},  {name:'Jebing', Distance:200},  {name:'Jebing', Distance:200}],
            vehicles:[{name:"Space Pod", total_no:2, max_distance:200, speed:2}],
            selectedPlanets:['Donlon','','',''],
            selectedVehicles:['Space Pod','','',''],
            token:'abc'
        }
        wrapper = setUp(initialState);
    })
    it('Planets select should be available for selection', ()=>{

        expect(wrapper.length).toBe(1);
      

    })
});