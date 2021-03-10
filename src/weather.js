import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);

  function showData(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
  }
  let windSpeed = Math.round(wind);

  function showCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e46c43536b53db7462b3c442cf88a50c&units=metric`;
    axios.get(url).then(showData);
    console.log(url);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={showCity}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h3> {city} </h3>
      <br />
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {windSpeed} km/h</li>
        <li> {description}</li>
      </ul>
    </div>
  );
}
