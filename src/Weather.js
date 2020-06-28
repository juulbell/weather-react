import axios from "axios";
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "2b873762a1a6adb48de7a31bdbe782c2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <p>
      <ReactAnimatedWeather
        icon="FOG"
        color="yellow"
        size={48}
        animate={true}
      />
      <ReactAnimatedWeather
        icon="SLEET"
        color="yellow"
        size="48"
        animate={true}
      />
    </p>
  );
}
