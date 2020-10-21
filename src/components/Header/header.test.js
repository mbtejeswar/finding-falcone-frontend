import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index.js';



configure({adapter:new Adapter()});


describe('<SelectPlanetVehicle />', ()=>{
    it('Verify header is available', ()=>{

        const wrapper = shallow(<Header />);
        expect(wrapper.exists(<header></header>)).to.true

    })
});