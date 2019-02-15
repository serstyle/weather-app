import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class SignIn extends Component{
	state = {
		email:'',
		password:'',
		isAuth:false,
		testAuth:false
	}

	handleChange = (e) =>{
		this.setState({
			[e.target.id]: e.target.value

		})
	}

	handleSumbit = (e) =>{
		e.preventDefault()
		fetch('https://weathers-server.herokuapp.com/signin',{
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        email:this.state.email,
	        password:this.state.password
	      })
	    })
	      .then(response => response.json())
	      .then(data => { 
	        if(data !== 'err'){
	        	console.log(data)
	          this.props.getUser(data);
	          this.setState({isAuth:true})
	        }
	        else{
	        	this.setState({testAuth:true})
	        } 
	      }) 
	}

	render(){
		if(this.state.isAuth){return (<Redirect to='/weather-app' />)};

		return(
		<div className='container row'>
			<h3> Sign In : </h3>
			<form onSubmit={this.handleSumbit} className='container col s12'>
				<div className="row">
			        <div className="input-field col s12">
			          <input onChange={this.handleChange} required id="email" type="email" className="validate" />
			          <label htmlFor="email">Email</label>
			        </div>
			    </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <label htmlFor="password">Password</label>
			          <input onChange={this.handleChange} required  id="password" type="password" className="validate" />
			          {!this.state.testAuth? null : <span className="helper-text red-text">wrong password or email</span>}
			        </div>
			      </div>

			      <button className='waves-effect waves-light btn'> Log In </button>
		      </form>
	      </div>
			)
	}
}

export default SignIn;