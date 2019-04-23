import React from 'react';
import {shallow} from 'enzyme'
import {Main} from './Main';

let wrap

beforeEach(()=>{
  const fetchWeather = jest.fn()
  const props = {
    user:{
      city:'Paris',
      name:'fr'
    }
  }
  wrap = shallow(<Main {...props} fetchWeather={fetchWeather}/>)
})


it('should snapshot component', () => {
  expect(wrap).toMatchSnapshot()
})

it('test state', ()=>{
  expect(wrap.state().user.name).toEqual('fr')
  expect(wrap.state().city).not.toEqual('fr')
  expect(wrap.state().city).toEqual('Paris')
})

it('test handleSubmit',()=>{
  const submit = jest.spyOn(wrap.instance(), 'handleSubmit')
  submit({preventDefault: () => {}})
  expect(submit)
  .toHaveBeenCalledTimes(1)
  expect(wrap).toMatchSnapshot()
})