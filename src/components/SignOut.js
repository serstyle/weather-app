import React from 'react'
import { Redirect } from 'react-router-dom'

class SignOut extends React.Component{
	state = {id: '',
			email: '',
			name: '',
			city: 'Paris'
	}


	componentDidMount(){
		this.props.getUser(this.state)
		
	}


	render(){
		return(<Redirect to='/' />)
	}
}

export default SignOut;