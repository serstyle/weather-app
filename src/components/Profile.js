import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component{
	state = {
		email: this.props.user.email,
		name: this.props.user.name,
		city: this.props.user.city,
		isAuth: true,
		isSubmit:false
	}


	componentDidMount(){
		fetch('https://weathers-server.herokuapp.com/profile', {
			method:'post',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				email:this.state.email
			})
		})
		.then(data => data.json())
		.then(user => {
			if(!user.email){
				 this.setState({isAuth:false})
			}
		})
		.catch(err => this.setState({isAuth:false}))

	}

	handleChange = (e) =>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSumbit = (e) => {
		e.preventDefault()
		const { email, city, name} = this.state
		fetch('https://weathers-server.herokuapp.com/profile', {
			method:'put',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				name,
				email,
				city
			})
		})
		.then(data => data.json())
		.then(user => {
			this.props.getUser(user)
			this.setState({isSubmit:true})
		})
	}

	render(){
		if(!this.state.isAuth || this.state.isSubmit){
			return(<Redirect to='/' />)}


		return(
		<div className='container row'>
			<h1>Your Profile : </h1>
			<form onSubmit={this.handleSumbit} className='col s12'>
			      <div className="row">
			        <div className="input-field col s12">
			          <label className='active' htmlFor="name">Name</label>
			          <input onChange={this.handleChange} required id="name" value={this.state.name} type="text" className="validate" />
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <label className='active' htmlFor="city">City</label>
			          <input onChange={this.handleChange} value={this.state.city} required id="city" 
			      		type="text"/*don t forget to add city choice dont let user choose*/
			      		className="validate" />
			        </div>
			      </div>
			      <button className='waves-effect waves-light btn'> Submit </button>
		      </form>
	      </div>
			)
	}
}

export default Profile;