import React from 'react'

class Home extends React.Component{
	render(){
		const isPending = !this.props.isPending?
		<div className="row">
			    <div className="col s12 m5">
			      <div className="card-panel blue">
			        <span id='showCity' className="white-text">{this.props.city} <img alt='weather-icon' src={this.props.currentIcon} /> </span>
			        <p id='showCurrentTemp' className="white-text"> {this.props.currentTemp}C </p>
			        <p id='showCurrentWeather' className="white-text"> {this.props.currentWeath} </p>
			      </div>
			    </div>
			  </div>
			  :
			  (<div className=" preloader-wrapper small active">
  		          <div className=" spinner-layer spinner-green-only">
  		            <div className="circle-clipper left">
  		              <div className="circle"></div>
  		            </div><div className="gap-patch">
  		              <div className="circle"></div>
  		            </div><div className="circle-clipper right">
  		              <div className="circle"></div>
  		            </div>
  		          </div>
  		        </div>)

		const isAuth = this.props.name.length ?
			<div className='auth'>
				<h1>Welcome {this.props.name} </h1>
				
			</div> :
					<div>
						<h3 className='center'>Welcome, </h3>
						<h4 className='center'>don't forget to sign in to see your city in first</h4>	
					</div>
					
	return(
		<div>
			{isAuth}
			{isPending}
		</div>
		)}
}

export default Home;
