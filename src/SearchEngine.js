import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [searchedResults, setSearchResults] = useState(false);

  const [weather, setWeatherForecast] = useState({});

  function generateWeatherResults(response) {
    setSearchResults(true);
    console.log(response.data);
    setWeatherForecast({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(generateWeatherResults);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Please enter a city"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (searchedResults) {
    return (
      <div>
        {searchForm}
        <ul>
          <li> Temperature: {weather.temperature}°</li>

          <li> Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li> Windspeed: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return searchForm;
  }
}
