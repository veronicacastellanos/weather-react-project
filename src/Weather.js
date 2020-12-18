import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] =useState(props.defaultCity);

function handleResponse(response) {
console.log(response.data);
setWeatherData({
ready: true,
temperature: response.data.main.temp,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
high: response.data.main.temp_max,
low: response.data.main.temp_min,
humidity: response.data.main.humidity,
wind: response.data.wind.speed,
city: response.data.name,
icon: response.data.weather[0].icon,
});
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

function search(){
const apiKey = "28e5d779cb15e67167736268bc70d36f";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleResponse);
}

if (weatherData.ready) {
return (
<div className="Weather">
<form onSubmit={handleSubmit}>
<input 
type="Search"
placeholder="Enter a city..."
className="form-control" 
onChange={handleCityChange}
/>
</form>
<WeatherInfo data={weatherData}/>
</div>
);
} else {
search();
return "Loading...";
}
}
