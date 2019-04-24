import React from 'react'

class Search extends React.Component{
	render(){return(
		<div>
			<form onSubmit={this.props.handleSubmit}>
				<div className="row">
			        <div className="input-field col s12">
						<label>City</label>
						<input aria-label='search city' onChange={this.props.handleChange}type='text' />
						<button className='waves-effect waves-light btn'>Submit</button>
						{this.props.error?<span style={{marginLeft:'10px'}} className="helper-text red-text">didn't find the city</span>: null}
					</div>
				</div>	
			</form>
		</div>
		)}
}				

export default Search;


// in class bc i wanted to try componentdidcatch


// const Search = ({handleChange, handleSubmit	}) =>{
// 	return(
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<label>City : </label>
// 				<input onChange={handleChange}type='text' />
// 				<button>Submit</button>
// 			</form>
// 		</div>
// 		)
// }			