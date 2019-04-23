import React, { Component } from 'react'

class ErrorBoundary extends Component{
	constructor(props) {
	    super(props);
	    this.state = { hasError: false };
	  }

	componentDidCatch(error, info){
		this.setState({ hasError : true })
		console.log('errrr catch')
	}

	render(){
		if(this.state.error === true){
	      return (
	      	<div>Something went wrong.</div>
	      	);
	    }
	    return this.props.children;
		}
}

export default ErrorBoundary