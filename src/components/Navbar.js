import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = ({user, getUser}) =>{
	return(
		 <nav className='blue lighten-4 z-depth-2'>
		    <div className="nav-wrapper container">
		      <p><Link to='/' className="brand-logo">Weather app</Link></p>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        {user.length?
			        <div>
			        	<li><NavLink to='/profile'>Profile</NavLink></li>
			        	<li><NavLink to='/signout'>Signout</NavLink></li>
			        </div>
		        	:
		        	<div>
			        	<li><NavLink to='/register'>Register</NavLink></li>
			        	<li><NavLink to='/signin'>SignIn</NavLink></li>
		        	</div>
		        }
		      </ul>
		    </div>
		  </nav>
		)
}

export default withRouter(Navbar);