import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});


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
});
}

if (weatherData.ready) {
return (
<div className="Weather">
<form>
<input 
type="Search"
placeholder="Enter a city..."
className="form-control" />
</form>
<WeatherInfo data={weatherData}/>
</div>
);
} else {
const apiKey = "28e5d779cb15e67167736268bc70d36f";
let city = "Madrid";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleResponse);
return "Loading...";
}
}
