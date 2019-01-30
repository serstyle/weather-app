import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'
import { NavItem, Navbar } from 'react-materialize'


const Nav = ({user, getUser}) =>{
	return(
		<Navbar brand='Weather app' right>
			{user.length?
			<div>
			 <NavLink to='/profile'> <NavItem>Profile</NavItem></NavLink>
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

export default withRouter(Nav);





// <nav className='blue lighten-4 z-depth-2'>
// 		    <div className="nav-wrapper container">
// 		      <p><Link to='/' className="brand-logo">Weather app</Link></p>
// 		      <ul id="nav-mobile" className="right hide-on-med-and-down">
// 		        {user.length?
// 			        <div>
// 			        	<li><NavLink to='/profile'>Profile</NavLink></li>
// 			        	<li><NavLink to='/signout'>Signout</NavLink></li>
// 			        </div>
// 		        	:
// 		        	<div>
// 			        	<li><NavLink to='/register'>Register</NavLink></li>
// 			        	<li><NavLink to='/signin'>SignIn</NavLink></li>
// 		        	</div>
// 		        }
// 		      </ul>
// 		    </div>
// 		  </nav>