import React from 'react'
import {shallow} from 'enzyme'
import SignOut from './SignOut'

const mockGetUser = jest.fn()
const wrap = shallow(<SignOut getUser={mockGetUser} />)

it('snapshot componenet', ()=>{
    expect(wrap).toMatchSnapshot()
    expect(mockGetUser).toHaveBeenCalledTimes(1);
})