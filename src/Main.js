import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './components/Home'
import Search from './components/Search'
import ErrorBoundary from './components/ErrorBoundary'
import {handleChangeCity, fetchWeather} from './actions.js'


const mapStateToProps = (state) =>{
  return{
    city: state.handleChangeCity.city,
    currentTemp: state.fetchWeather.currentTemp,
    currentWeath: state.fetchWeather.currentWeath,
    currentIcon: state.fetchWeather.currentIcon,
    currentCity: state.fetchWeather.currentCity,
    isPending: state.fetchWeather.isPending,
    error: state.fetchWeather.error
}}

const mapDispatchToProps = (dispatch) =>{
  return{
    onHandleChangeCity: (event) =>dispatch(handleChangeCity(event.target.value)),
    fetchWeather: () => dispatch(fetchWeather())
  }
}

class Main extends Component {
  state = {
    city: this.props.user.city,
    currentTemp: '',
    currentWeath: '',
    currentIcon: '',
    currentCity: '',
    user:this.props.user,
    err:false
  }
    // fetch api 
  componentDidMount(){
    this.props.fetchWeather()
    console.log(this.props.isPending)
  
  }
  // fetch api on submitt
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.fetchWeather()
    console.log(this.props.isPending)
    }


  render() {
    
    return (
      <div className='container'>
        <Home 
            city={this.props.currentCity}
            currentTemp={this.props.currentTemp}
            currentWeath={this.props.currentWeath}
            currentIcon={this.props.currentIcon}
            name={this.state.user.name}
            isPending={this.props.isPending}
            />

            <Search 
            handleSubmit={this.handleSubmit}
            handleChange={this.props.onHandleChangeCity}
            error={this.props.error}
            />
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
