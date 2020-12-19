import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";

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
<WeatherTemperature celsius={props.data.temperature} description={props.data.description}/>
<div className="row">
<div className="col-6">
<ul className="stats">
<li>
Humidity: {props.data.humidity}%
</li>
</ul>
</div>
<div className="col-6">
<ul className="stats">
<li>
Wind: {Math.round(props.data.wind)}KM/H
</li>
</ul>
</div>
</div>
</div>
);
}


