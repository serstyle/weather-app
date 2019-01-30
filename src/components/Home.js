import React from 'react'

class Home extends React.Component{
	render(){
		const isAuth = this.props.name.length ?
			<div>
				<h1>Welcome {this.props.name} </h1>
				<p> The current weather at {this.props.city} is : {this.props.currentTemp} </p>
			</div> :
					<div>
						<h3 className='center'>Welcome, </h3>
						<h4 className='center'>don't forget to sign in to see your city in first</h4>
						<p> The current weather at {this.props.city} is : {this.props.currentTemp} </p>
					</div>
					
	return(
		<div>
			{isAuth}
		</div>
		)}
}

export default Home;


// in class bc i wanted to try componentdidcatch

// const Home = ( { currentTemp, city }) =>{
// 	return(
// 		<div>
// 			<h1>Welcome</h1>
// 			<p> The current weather is : {currentTemp} </p>
// 		</div>
// 		)
// }