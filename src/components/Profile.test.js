import React from 'react'
import {shallow} from 'enzyme'
import Profile from './Profile'

const mockUser = {
    email:'', name:'name1', city:'city1'
}

const mockGetUser = jest.fn()


describe('test function', ()=>{
    describe('should handleChange', () => {
        let wrap = shallow(<Profile user={mockUser} getUser={mockGetUser}/>)
        it('onChange Input name', ()=>{
            const nameMock = wrap.state().name
            const event = {target: {id: "name", value: "name2"}};
            wrap.find('#name').simulate('change', event)
            expect(wrap.state().name).not.toBe(nameMock)
            expect(wrap.state().name).toBe('name2')
        })
        it('onChange Input city', ()=>{
            const cityMock = wrap.state().city
            const event = {target: {id: "city", value: "city2"}};
            wrap.find('#city').simulate('change', event)
            expect(wrap.state().city).not.toBe(cityMock)
            expect(wrap.state().city).toBe('city2')
        })
    })

    describe('should componentdidmount',()=>{
        it('should err', (done) => {
            const mockFailResponse = {}
            const mockJsonPromise = Promise.reject(mockFailResponse)
            const mockFetchPromise = Promise.reject({
                json: ()=> mockJsonPromise
            })
            jest.spyOn(global, 'fetch').mockImplementation(()=>mockFetchPromise)
            
            let wrap = shallow(<Profile user={mockUser} getUser={mockGetUser}/>)
            
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith('https://weathers-server.herokuapp.com/profile', {
                method:'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:wrap.state().email
                })
            })
            process.nextTick(() => { 
                expect(wrap.state()).toEqual({
                    email:'',
                    name:'name1',
                    city:'city1',
                    isAuth:false,
                    isSubmit:false
                });
                global.fetch.mockClear();
                done()
            });
        })
        
        it('should success', (done) => {
            const mockSuccessResponse = {}
            const mockJsonPromise = Promise.resolve(mockSuccessResponse)
            const mockFetchPromise = Promise.resolve({
                json: ()=> mockJsonPromise
            })
            jest.spyOn(global, 'fetch').mockImplementation(()=>mockFetchPromise)
    
            let wrap = shallow(<Profile user={mockUser} getUser={mockGetUser}/>)
            
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith('https://weathers-server.herokuapp.com/profile', {
                method:'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:wrap.state().email
                })
            })
            process.nextTick(() => { 
                expect(wrap.state()).toEqual({
                    email:'',
                    name:'name1',
                    city:'city1',
                    isAuth:false,
                    isSubmit:false
                });
                global.fetch.mockClear();
                done()
            });
        })  
    })  

    it('should handlesubmit', (done) => {
        let wrap = shallow(<Profile user={mockUser} getUser={mockGetUser}/>) 
        const mockSuccessResponse = {}
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: ()=> mockJsonPromise
        })
        jest.spyOn(global, 'fetch').mockImplementation(()=>mockFetchPromise)

        wrap.setState({email:'test@test'})
        global.fetch.mockClear();
        wrap.find('form').simulate('submit', {
            preventDefault: () => {}
        })
        


        expect(global.fetch)
        .toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://weathers-server.herokuapp.com/profile', {
            method:'put',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: wrap.state().name,
                email: wrap.state().email,
                city: wrap.state().city
            })
        })

        process.nextTick(() => { 
            wrap.setState({isAuth:true})
            expect(wrap.state()).toEqual({
                email:'test@test',
                name:'name1',
                city:'city1',
                isAuth:true,
                isSubmit:true
            });
            global.fetch.mockClear();
            done();
        });
    })
    

})

describe('snapshot with isAuth true or false', ()=>{
    let wrap = shallow(<Profile user={mockUser} getUser={mockGetUser}/>)
    it('should snapshot with isAuth true', () => {
      expect(wrap).toMatchSnapshot()
    })
    it('should snapshot with isAuth false', () => {
      wrap.setState({isAuth:false, isSubmit:true})
      expect(wrap).toMatchSnapshot()
    })
    
})