import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FindFalconeControls from './findFalconControls.js';



configure({adapter:new Adapter()});


describe('<SelectPlanetVehicle />', ()=>{
    it('Planets select should be available for selection', ()=>{

        const wrapper = shallow(<FindFalconeControls />);
        expect(wrapper.exists(<SelectPlanets key={index} planetindex={index}/>)).to.equal(true);

    })
});