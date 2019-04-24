import React from 'react'
import { shallow } from 'enzyme';
import Register from './Register'


const mockGetUser = jest.fn()
let wrap = shallow(<Register getUser={mockGetUser}/>)

it('snap', ()=>{
    expect(wrap).toMatchSnapshot()
})

describe('test', ()=>{
    describe('snapshot isAuth false', ()=>{
        wrap.setState({isAuth:false})
        expect(wrap).toMatchSnapshot()
        it('test state', ()=>{
            expect(wrap.state().email).toBe('')
            expect(wrap.state().password).toBe('')
            expect(wrap.state().name).toBe('')
            expect(wrap.state().city).toBe('')
            expect(wrap.state().isAuth).toBe(false)
        })
        
        
        it('onChange Input Email', ()=>{
            const emailMock = wrap.state().email
            const event = {target: {id: "email", value: "test@test"}};
            wrap.find('#email').simulate('change', event)
            expect(wrap.state().email).not.toBe(emailMock)
            expect(wrap.state().email).toBe("test@test")
        })
        
        it('onChange Input password', ()=>{
            const passwordMock = wrap.state().password
            const event = {target: {id: "password", value: "password1234"}};
            wrap.find('#password').simulate('change', event)
            expect(wrap.state().password).not.toBe(passwordMock)
            expect(wrap.state().password).toBe("password1234")
        })
        it('onChange Input name', ()=>{
            const nameMock = wrap.state().name
            const event = {target: {id: "name", value: "name1234"}};
            wrap.find('#name').simulate('change', event)
            expect(wrap.state().name).not.toBe(nameMock)
            expect(wrap.state().name).toBe("name1234")
        })
        it('onChange Input city', ()=>{
            const cityMock = wrap.state().city
            const event = {target: {id: "city", value: "city1234"}};
            wrap.find('#city').simulate('change', event)
            expect(wrap.state().city).not.toBe(cityMock)
            expect(wrap.state().city).toBe("city1234")
        })
        
    })
    
    
})

it('snapshot isAuth true', ()=>{
    wrap.setState({isAuth:true})
    expect(wrap).toMatchSnapshot()
})

describe('fetch handleSubmit for register', () => {
    it('fetches data from server when server returns a successful response', done => { 
      const wrapper = shallow(<Register  getUser={mockGetUser}/>);
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
      const mockFetchPromise = Promise.resolve({ 
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      
      
      wrapper.instance().handleSubmit({preventDefault: () => {}})
      wrapper.find('form').simulate('submit', {preventDefault: () => {

    }})                       
      
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(global.fetch)
        .toHaveBeenCalledWith('https://weathers-server.herokuapp.com/register',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email:wrapper.state().email,
          name:wrapper.state().name,
          password:wrapper.state().password,
          city:wrapper.state().city
        })
      });
  
      process.nextTick(() => { 
        expect(wrapper.state()).toEqual({
            email:'',
            password:'',
            name:'',
            city:'',
            isAuth:true,
        });
        global.fetch.mockClear();
        done();
      });
    });
    
  });