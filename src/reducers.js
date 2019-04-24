import { REQUEST_WEATHER_PENDING, REQUEST_WEATHER_SUCCESS, REQUEST_WEATHER_FAILED } from './constants.js'

const initState = {
	city: 'Paris'
}


export const handleChangeCity = (state=initState, action={}) =>{
	switch(action.type){
		case 'REQUEST_HANDLE_CITY':
			return Object.assign({}, state, {city:action.payload})
		default:
			return state
	}
}


const weatherState = {
	currentTemp: '',
    currentWeath: '',
    currentIcon: '',
    currentCity: '',
    isPending: false,
    isError: false
}


export const fetchWeather = (state=weatherState, action={}) =>{
	
	const data = action.payload;
	switch(action.type){
		case REQUEST_WEATHER_PENDING:
			return Object.assign({}, state, {isPending:true, isError: false});
		case REQUEST_WEATHER_SUCCESS:
			return Object.assign({}, state, {
				currentTemp: Math.floor(data.main.temp),
				currentCity: data.name,
				currentWeath: data.weather[0].main,
				currentIcon: 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png',
				isPending:false,
				isError: false});
		case REQUEST_WEATHER_FAILED:
			return Object.assign({}, state, {isPending:false, isError: true})
		default:
			return state
	}
};