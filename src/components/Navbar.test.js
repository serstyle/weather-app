import React from 'react'
import {shallow} from 'enzyme'
import Nav from './Navbar'


describe('snapshot component', ()=>{
    it('should snapshot with user.length true', () => {
        let wrap = shallow(<Nav user='ser'/>)
        expect(wrap).toMatchSnapshot()
    })
    it('should snapshot with user.length false', () => {
        let wrap = shallow(<Nav user=''/>)
        expect(wrap).toMatchSnapshot()
    })
    
})