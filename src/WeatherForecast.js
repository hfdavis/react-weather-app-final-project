import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "4cfe24t3503o158b86cbac58e0e08cf3";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <WeatherIcon code="mist-day" size={36} />

          <div className="WeatherForecast-Temperatures">
            <span className="WeatherForecast-Temperature-max">19</span>
            <span className="WeatherForecast-Temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
