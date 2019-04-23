import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, Navbar } from 'react-materialize'


const Nav = ({user}) =>{
	return(
		<Navbar className='blue' brand={<NavLink to='/'>Weather App</NavLink>} right>
			{user.length?
			<div>
			  <NavItem><NavLink to='/profile'>Profile</NavLink></NavItem>
			  <NavItem><NavLink to='/signout'>Signout</NavLink></NavItem>
			</div>
			  :
			<div>
			  <NavItem><NavLink to='/register'>Register</NavLink></NavItem>
			  <NavItem><NavLink to='/signin'>Sign In</NavLink></NavItem>
			</div>
			}
		</Navbar>
		)
}

export default Nav;
