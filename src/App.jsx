// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./components/Header";
import LocationNotFound from "./components/LocationNotFount";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";
import * as images from "./imagePaths"; // Import named exports as an object

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("0°C");
  const [description, setDescription] = useState("light rain");
  const [humidity, setHumidity] = useState("45%");
  const [windSpeed, setWindSpeed] = useState("12 Km/H");
  const [isLocationNotFound, setLocationNotFound] = useState(true);
  const [weatherImageSrc, setWeatherImageSrc] = useState("");

  const checkWeather = async (city) => {
    const apiKey = "4956c22110d7fe24c5a7afdbb65c96ee";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const weatherData = await response.json();

      if (weatherData.cod === "404") {
        setLocationNotFound(true);
        return;
      }
      setLocationNotFound(false);
      setTemperature(`${Math.round(weatherData.main.temp - 273.15)}°C`);
      setDescription(weatherData.weather[0].description);
      setHumidity(`${weatherData.main.humidity}%`);
      setWindSpeed(`${weatherData.wind.speed}Km/H`);

      switch (weatherData.weather[0].main) {
        case "Clouds":
          setWeatherImageSrc(images.cloudImage);
          break;
        case "Clear":
          setWeatherImageSrc(images.clearImage);
          break;
        case "Rain":
          setWeatherImageSrc(images.rainImage);
          break;
        case "Mist":
          setWeatherImageSrc(images.mistImage);
          break;
        case "Snow":
          setWeatherImageSrc(images.snowImage);
          break;
        case "Haze":
          setWeatherImageSrc(images.hazeImage);
          break;
        default:
          setWeatherImageSrc(images.notFoundImage);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    checkWeather(city);
  };

  const handleLocationChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <Header
        location={city}
        onLocationChange={handleLocationChange}
        onSearch={handleSearch}
      />

      {isLocationNotFound ? (
        <LocationNotFound />
      ) : (
        <WeatherInfo
          temperature={temperature}
          description={description}
          humidity={humidity}
          windSpeed={windSpeed}
          weatherImageSrc={weatherImageSrc}
        />
      )}
    </div>
  );
}

export default App;
