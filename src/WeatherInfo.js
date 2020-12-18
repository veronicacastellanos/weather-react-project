import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
return (
<div className="WeatherInfo">
<h2>{props.data.city}</h2>
<div className="row">
<div className="col-6">
<h3><FormattedDate date={props.data.date}/></h3>
</div>
<div className="col-6">
<WeatherIcon code={props.data.icon}/>
</div>
</div>
<div className="row">
<div className="col-6">
<p className="temp">{Math.round(props.data.temperature)}°C</p>
</div>
<div className="col-6">
<span className="text-capitalize">
<p className="condition">{props.data.description}</p>
</span>
</div>
</div>
<div className="row">
<div className="col-6">
<ul className="stats">
<li>
High: {Math.round(props.data.high)}°C
</li>
<li>
Low: {Math.round(props.data.low)}°C
</li>
</ul>
</div>
<div className="col-6">
<ul className="stats">
<li>
Humidity: {props.data.humidity}%
</li>
<li>
Wind: {Math.round(props.data.wind)}KM/H
</li>
</ul>
</div>
</div>
</div>
);
}


