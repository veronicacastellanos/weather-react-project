import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
}

function showCelsius(event) {
event.preventDefault();
setUnit("celsius");
}

function fahrenheit() {
return (props.celsius * 9) / 5 + 32;
}

if (unit === "celsius") {
return (
<div className="WeatherTemperature">
<div className="row">
<div className="col-6">
<span className="temp"> {Math.round(props.celsius)}°</span>
<span className="unit">°C |{" "}
<a href="/" onClick={showFahrenheit}>
°F
</a>
</span>
</div>
<div className="col-6">
<span className="text-capitalize">
<p className="condition">{props.description}</p>
</span>
</div>
</div>
</div>
);
} else {
return (
<div className="WeatherTemperature">
<div className="row">
<div className="col-6">
<span className="temp"> {Math.round(fahrenheit())}°</span>
<span className="unit">
<a href="/" onClick={showCelsius}>
°C
</a>{" "}
| °F
</span>
</div>
<div className="col-6">
<span className="text-capitalize">
<p className="condition">{props.description}</p>
</span>
</div>
</div>
</div>
)
}
}