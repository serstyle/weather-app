import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home'



describe('Home', ()=>{
    let mockProps = {
        city:'lille',
        currentTemp:'15',
        currentWeath:"cloud",
        currentIcon:'somelink'
    }
    it('Props is correct', () => {
        let wrap = shallow(<Home city={mockProps.city} name={''}/>)
        expect(wrap.instance().props.city).toEqual('lille')
    })
    
    it('Pending true', ()=>{
        let homeMock = shallow(<Home name={''} isPending={true}/>)
        expect(homeMock).toMatchSnapshot()
    })
    it('Pending false', ()=>{
        let homeMock = shallow(<Home props={mockProps} name={''} isPending={false}/>)
        expect(homeMock).toMatchSnapshot()
    })
    it('Name.lengt is true', ()=>{
        let homeMock = shallow(<Home props={mockProps} name={'test'}/>)
        expect(homeMock).toMatchSnapshot()
    })
    it('Name.lengt is false', ()=>{
        let homeMock = shallow(<Home props={mockProps} name={''}/>)
        expect(homeMock).toMatchSnapshot()
    })

})