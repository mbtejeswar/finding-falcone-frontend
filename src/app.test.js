import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import {testStore} from './utils/index';
import { Provider } from 'react-redux';
import Layout from './hoc/Layout/Layout';
configure({adapter:new Adapter()});

// const setUp = (initialState={})=>{
//     const store = testStore(initialState);
//     const wrapper = shallow(<Provider store={store} > <App  /></Provider>) 
//     return wrapper;
// }

describe('App component test', ()=>{
    let wrapper;
    // beforeEach(()=>{
    //     const initialState = {
    //         planets:[{name:'Donlon', Distance:100}, {name:'Jebing', Distance:200}],
    //         vehicles:[{name:"Space Pod", total_no:2, max_distance:200, speed:2}],
    //         selectedPlanets:['','','',''],
    //         selectedVehicles:['','','',''],
    //         findFalconeResult:{},
    //         token:'',
    //         result:{status:false}
    //     }
    //     wrapper = setUp(initialState);
    // })


it('Verify whether app component is rendered and contains Layout in it', ()=>{
    const wrapper = shallow( <App />) 

    expect(wrapper.contains( <Layout />)).toBe(true);


});


});

