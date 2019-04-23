import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class Register extends Component{
	state = {
		email: '',
		name: '',
		password: '',
		city: '',
		isAuth: false
	}


	handleChange = (e) =>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { email, password, city, name} = this.state
		fetch('https://weathers-server.herokuapp.com/register', {
			method:'post',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				email,
				name,
				password,
				city
			})
		})
		.then(data => data.json())
		.then(user => {
			this.props.getUser(user)
			this.setState({isAuth:true})
		})
	}

	render(){
		if(this.state.isAuth){
			return(<Redirect to='/' />)}


		return(
		<div className='container row'>
			<h3> Register : </h3>
			<form onSubmit={this.handleSubmit} className='col s12'>
				<div className="row">
			        <div className="input-field col s12">
			          <input onChange={this.handleChange} required id="email" type="email" className="validate" />
			          <label htmlFor="email">Email</label>
			        </div>
			    </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <label htmlFor="password">Password</label>
			          <input onChange={this.handleChange} required id="password" type="password" className="validate" />
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <label htmlFor="name">Name</label>
			          <input onChange={this.handleChange} required id="name" type="text" className="validate" />
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <label htmlFor="city">City</label>
			          <input onChange={this.handleChange} required id="city" 
			      		type="text"/*don t forget to add city choice dont let user choose*/
			      		className="validate" />
			        </div>
			      </div>
			      <button className='waves-effect waves-light btn'> Register </button>
		      </form>
	      </div>
			)
	}
}

export default Register;