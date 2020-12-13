import React from "react";
import "./Weather.css";

export default function Weather() {
return (
<div className="Weather">
<form>
<input 
type="Search"
placeholder="Enter a city..."
className="form-control" />
</form>
<div className="row">
<div className="col-6">
<ul className="city">
<li>
Madrid
</li>
<li>
Sun, 13 December - 2:51pm
</li>
<li>
Clear
</li>
</ul>
</div>
</div>
<div className="temp">
<div className="row">
<div className="col-6">
12°C
</div>
<div className="col-6">
<img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/21/sun-Icon-Vector-thin-line-Graphics-3920713-1-580x386.jpg"
alt="Sunny" />
</div>
</div>
</div>
<div className="row">
<div className="col-6">
<ul>
<li>
High: 12°C
</li>
<li>
Low: 7°C
</li>
</ul>
</div>
<div className="col-6">
<ul>
<li>
Humidity: 76%
</li>
<li>
Wind: 9,7KM/H
</li>
</ul>
</div>
</div>
</div>
)
}