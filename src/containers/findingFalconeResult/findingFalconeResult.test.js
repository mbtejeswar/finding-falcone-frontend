import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import findingFalconeResult from './findingFalconeResult.js';
import {findByTestAtrr, testStore} from '../../utils/index'
import { Provider } from 'react-redux';
configure({adapter:new Adapter()});


const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<Provider store={store} ><findingFalconeResult /></Provider>) 
    return wrapper;
}


describe('Finding Falcone result  test', ()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            planets:[{name:'Donlon', Distance:100}, {name:'Jebing', Distance:200}],
            vehicles:[{name:"Space Pod", total_no:2, max_distance:200, speed:2}],
            selectedPlanets:['','','',''],
            selectedVehicles:['','','',''],
            findFalconeResult:{},
            token:'',
            result:{status:false}
        }
        wrapper = setUp(initialState);
    })


it('It should render without errors', ()=>{

    expect(wrapper.length).toBe(1);
  

});


});
