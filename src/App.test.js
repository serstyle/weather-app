import React from 'react';
import {shallow} from 'enzyme'
import App from './App';

let wrap = shallow(<App />)
it('renders without crashing', () => {
  expect(wrap).toMatchSnapshot()
});

it('test state', ()=>{
  expect(wrap.state().user).toEqual({
    id:'',
    email:'',
    name:'',
    city:'Paris'
  });
})

it('test getUser', ()=>{
  const mockUser={
    id:'2',
    email:'test@test',
    name:'test',
    city:'Lille'
  }
  wrap.instance().getUser(mockUser)
  expect(wrap.state().user).not.toEqual({
    id:'3',
    email:'frt@test',
    name:'test',
    city:'Paris'
  });
  expect(wrap.state().user).toEqual({
    id:'2',
    email:'test@test',
    name:'test',
    city:'Lille'
  });
})
