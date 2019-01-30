import React, {Component} from 'react'
import Main from './Main'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Navbar'
import SignOut from './components/SignOut'
import Register from './components/Register'
import Profile from './components/Profile'

// import dataCity from './dataCity'

class App extends Component{
	state = {
		user: {
			id: '',
			email: '',
			name: '',
			city: 'Paris'
		} 
	}

	getUser = (user) =>{
		this.setState({
			user
		})
	}

	render(){
		return(
			<BrowserRouter>
				<div>
					<Nav user={this.state.user.name} getUser={this.getUser}/>
					<Switch>
						<Route exact path='/' render={(props) => <Main {...props} user={this.state.user} />} />
						<Route path= '/signin' render={(props) => <SignIn {...props} getUser={this.getUser} />} />
						<Route path= '/signout' render={(props) => <SignOut {...props} getUser={this.getUser} />} />
						<Route path= '/register' render={(props) => <Register {...props} getUser={this.getUser} />} />
						<Route path= '/profile' render={(props) => <Profile {...props} getUser={this.getUser} user={this.state.user} />} />
					</Switch>
				</div>
			</BrowserRouter>
			)
	}
}

export default App;