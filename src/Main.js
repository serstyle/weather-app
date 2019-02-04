import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'
import ErrorBoundary from './components/ErrorBoundary'


class Main extends Component {
  state = {
    city: this.props.user.city,
    currentTemp: '',
    currentWeath: '',
    currentIcon: '',
    currentCity: this.props.user.city,
    user:this.props.user,
    err:false
  }
    // fetch api 
  componentDidMount(){
  fetch('https://weathers-server.herokuapp.com/getapi',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          city:this.state.city,
        })
      })
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        this.setState({
          currentTemp: Math.floor(data.main.temp),
          currentCity: data.name,
          currentWeath: data.weather[0].main,
          currentIcon: 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png'
        })
    })
    .catch(error=> {if(error){this.setState({err:true})}})
  
  }
  // fetch api on submitt
  handleSubmit = (e) =>{
    e.preventDefault()
    fetch('https://weathers-server.herokuapp.com/getapi',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          city:this.state.city,
        })
      })
      .then(res => res.json())
      .then(data=> {
        this.setState({
          currentTemp: Math.floor(data.main.temp),
          currentCity: data.name,
          currentWeath: data.weather[0].main,
          currentIcon: 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png',
          err:false
        })
      })
        .catch(error=> this.setState({err:true}))
    }

  handleChange = (e) =>{
    this.setState({
      city: e.target.value
    })
  }



// the weather (mist, sunny, etc...) = data.weather[0].main



// componentDidMount(){
//     console.log(this.state)
//   fetch('https://api.openweathermap.org/data/2.5/&APPID='+ id)
//     .then(res => res.json())
//     .then(data=> console.log(data) )
//   }


// put the diidnt find the city in the search component bitween the button and the input
  render() {
    
    const home = 
    this.state.currentCity?
      <div>
          <ErrorBoundary>
            <Home 
            city={this.state.currentCity}
            currentTemp={this.state.currentTemp}
            currentWeath={this.state.currentWeath}
            currentIcon={this.state.currentIcon}
            name={this.state.user.name}
            />

            <Search 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            error={this.state.err}
            />
          </ErrorBoundary>
        </div>
        :
         <div className=" preloader-wrapper small active">
          <div className=" spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
    return (
      <div className='container'>
        {home}
      </div>
      
    );
  }
}

export default Main;
