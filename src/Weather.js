import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("Tokyo");
  let [weather, setWeather] = useState({});

  function handleWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function errorCity() {
    alert("Enter a valid city name");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8402ccd9e55983fce71eeeaa1d2bd1fc&units=metric`;
    axios.get(url).then(handleWeather).catch(errorCity);
  }
  function cityChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8402ccd9e55983fce71eeeaa1d2bd1fc&units=metric`;
    axios.get(url).then(handleWeather);
  }, [city]);

  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              onChange={cityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{city}</h1>
        <ul>
          <li>Last updated: now</li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weather.icon} alt={weather.description} />
            <strong>
              {Math.round(weather.temperature)}
              <span className="units">°C</span>
            </strong>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
