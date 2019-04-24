import React from 'react'
import { shallow } from 'enzyme';
import SignIn from './SignIn'


const mockGetUser = jest.fn()
let wrap = shallow(<SignIn getUser={mockGetUser}/>)

it('snap', ()=>{
    expect(wrap).toMatchSnapshot()
})

describe('test', ()=>{
    describe('snapshot isAuth false and test auth is false', ()=>{
        wrap.setState({isAuth:false, testAuth:false})
        expect(wrap).toMatchSnapshot()
        it('test state', ()=>{
            expect(wrap.state().email).toBe('')
            expect(wrap.state().password).toBe('')
            expect(wrap.state().isAuth).toBe(false)
            expect(wrap.state().testAuth).toBe(false)
        })
        
        
        it('onChange Input Email', ()=>{
            const emailMock = wrap.state().email
            const event = {target: {id: "email", value: "test@test"}};
            wrap.find('#email').simulate('change', event)
            expect(wrap.state().email).not.toBe(emailMock)
            expect(wrap.state().email).toBe('test@test')
        })
        
        it('onChange Input password', ()=>{
            const passwordMock = wrap.state().password
            const event = {target: {id: "password", value: "password1234"}};
            wrap.find('#password').simulate('change', event)
            expect(wrap.state().password).not.toBe(passwordMock)
            expect(wrap.state().password).toBe('password1234')
        })
        
    })
    
    
})

it('snapshot testAuth true', ()=>{
    wrap.setState({isAuth:false, testAuth:true})
    expect(wrap).toMatchSnapshot()
})

it('snapshot isAuth true', ()=>{
    wrap.setState({isAuth:true, testAuth:false})
    expect(wrap).toMatchSnapshot()
})

describe('fetch handleSubmit for signin', () => {
    it('fetches data from server when server returns a successful response without "err" as a response', done => { 
        //https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167 learn more here
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
      const mockFetchPromise = Promise.resolve({ 
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      
      const wrapper = shallow(<SignIn  getUser={mockGetUser}/>);
      
      wrapper.find('form').simulate('submit', {preventDefault: () => {

      }})                       
      
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch)
      .toHaveBeenCalledWith('https://weathers-server.herokuapp.com/signin',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email:wrapper.state().email,
          password:wrapper.state().password
        })
      });
  
      process.nextTick(() => { 
        expect(wrapper.state()).toEqual({
            email:'',
            password:'',
            isAuth:true,
            testAuth:false
        });
        global.fetch.mockClear();
        done();
      });
    });
    
    it('fetches data from server when server returns a succesful but with err as data', done => { 
        //https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167 learn more here
      const mockSuccessResponse = 'err';
      const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
      const mockFetchPromise = Promise.resolve({ 
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      
      const wrapper = shallow(<SignIn  getUser={mockGetUser}/>);
      
      wrapper.find('form').simulate('submit', {preventDefault: () => {

      }})                       
      
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch)
      .toHaveBeenCalledWith('https://weathers-server.herokuapp.com/signin',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email:wrapper.state().email,
          password:wrapper.state().password
        })
      });
  
      process.nextTick(() => { 
        expect(wrapper.state()).toEqual({
            email:'',
            password:'',
            isAuth:false,
            testAuth:true
        });
        global.fetch.mockClear();
        done();
      });
    });
  });