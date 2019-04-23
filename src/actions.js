import { REQUEST_WEATHER_PENDING, REQUEST_WEATHER_SUCCESS, REQUEST_WEATHER_FAILED } from './constants.js'



export const handleChangeCity = (text) => ({
	type: 'REQUEST_HANDLE_CITY',
	payload: text
})



export const fetchWeather = () => (dispatch, getState) =>{
	dispatch({type: REQUEST_WEATHER_PENDING})
	fetch('https://weathers-server.herokuapp.com/getapi',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          city:getState().handleChangeCity.city,
        })
      })
	.then(res => res.json())
	.then(data=>{
		console.log(data)
		dispatch({type:REQUEST_WEATHER_SUCCESS, payload: data})})
	.catch(err=> dispatch({type: REQUEST_WEATHER_FAILED, payload: err}))
}