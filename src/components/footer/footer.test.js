import React from 'react';
import  {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer'
configure({adapter:new Adapter()});


describe('App component test', ()=>{



    it('Verify whether footer component is rendered and displays footer', ()=>{
        const wrapper = shallow( <Footer />) 
    
        expect(wrapper.contains(<h4>Coding Problem - <a href="https://www.geektrust.in/coding-problem/frontend/space">www.geektrust.in/finding-falcone</a></h4>)).toBe(true);
    
    
    });
    
    
    });
    