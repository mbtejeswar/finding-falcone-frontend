import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPlanet from './selectPlanetVehicle';



configure({adapter:new Adapter()});


describe('<SelectPlanetVehicle />', ()=>{
    it('Planets select should be available for selection', ()=>{

        const wrapper = shallow(<SelectPlanet />);
        expect(wrapper.exists('.selectPlanet')).to.equal(true);

    })
});