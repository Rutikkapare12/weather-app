// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";
import { ImDroplet } from "react-icons/im";
import { FaWind } from "react-icons/fa";

function WeatherInfo(props) {
  return (
    <div className="weather-body">
      <img
        src={props.weatherImageSrc}
        alt="Weather Image"
        className="weather-img"
      />

      <div className="weather-box">
        <p className="temperature">{props.temperature}</p>
        <p className="description">{props.description}</p>
      </div>

      <div className="weather-details">
        <div className="humidity">
          <ImDroplet />
          <div className="text">
            <span id="humidity">{props.humidity}</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <FaWind />
          <div className="text">
            <span id="wind-speed">{props.windSpeed}</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

WeatherInfo.propTypes = {
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  windSpeed: PropTypes.string.isRequired,
  weatherImageSrc: PropTypes.string.isRequired,
};

export default WeatherInfo;
