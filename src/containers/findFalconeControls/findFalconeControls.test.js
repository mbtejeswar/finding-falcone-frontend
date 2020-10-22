import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FindFalconeControls from './findFalconControls.js';
import {findByTestAtrr, testStore} from '../../utils/index'
import SelectPlanets  from '../../components/selectPlanetVehicle/selectPlanetVehicle';
import Spinner from '../../components/spinner/spinner';
import { Provider } from 'react-redux';
configure({adapter:new Adapter()});


const setUp = (initialState)=>{
    const store = testStore(initialState);
    const wrapper = shallow(<FindFalconeControls store={store}/>) 
    return wrapper;
}


describe('Find Falcone controls  test', ()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            planets:[{name:'Donlon', Distance:100}, {name:'Jebing', Distance:200},  {name:'Jebing', Distance:200},  {name:'Jebing', Distance:200}],
            vehicles:[{name:"Space Pod", total_no:2, max_distance:200, speed:2}],

            token:'abc'
        }
        wrapper = setUp(initialState);
    })


it('It should render without errors', ()=>{


    expect(wrapper.length).toBe(1);
    

});


});
