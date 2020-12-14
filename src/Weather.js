import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

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
<h2>Madrid</h2>
<div className="row">
<div className="col-6">
<h3><FormattedDate date={weatherData.date}/></h3>
</div>
<div className="col-6">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="cloud" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>
</div>
</div>
<div className="row">
<div className="col-6">
<p className="temp">{Math.round(weatherData.temperature)}°C</p>
</div>
<div className="col-6">
<span className="text-capitalize">
<p className="condition">{weatherData.description}</p>
</span>
</div>
</div>
<div className="row">
<div className="col-6">
<ul className="stats">
<li>
High: {Math.round(weatherData.high)}°C
</li>
<li>
Low: {Math.round(weatherData.low)}°C
</li>
</ul>
</div>
<div className="col-6">
<ul className="stats">
<li>
Humidity: {weatherData.humidity}%
</li>
<li>
Wind: {weatherData.wind}KM/H
</li>
</ul>
</div>
</div>
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