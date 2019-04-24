import React from 'react'
import {shallow} from 'enzyme'
import Search from './Search'



describe('should snapshot component', () => {
    it('snapshot with this.props.error true', () => {
        let wrap = shallow(<Search error={true}/>)
        expect(wrap).toMatchSnapshot()
    })
    it('snapshot with this.props.error false', () => {
        let wrap = shallow(<Search error={false}/>)
        expect(wrap).toMatchSnapshot()
    })
})

describe('handle change or submit', ()=>{
    const mockHandleChange = jest.fn()
    const mockHandleSubmit = jest.fn()
    let wrap = shallow(<Search handleChange={mockHandleChange} handleSubmit={mockHandleSubmit}/>)
    it('should handleChange', () => {
      wrap.find('input').simulate('change')
      wrap.find('input').simulate('change')
      wrap.find('input').simulate('change')
      wrap.find('input').simulate('change')
      expect(mockHandleChange).toHaveBeenCalledTimes(4)
    })
    it('should handleSubmit', () => {
        wrap.find('form').simulate('submit')
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
      })
    
})



