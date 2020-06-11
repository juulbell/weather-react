import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Skeleton.css";

export default function Skeleton() {
  return (
    <div className="Skeleton">
      <h1>Frankfurt</h1>
      <ul>
        <li>Monday 12:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <p>
            <ReactAnimatedWeather
              icon="FOG"
              color="green"
              size={48}
              animate={true}
            />
          </p>
          22 degress
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humadity: 20%</li>
          <li>Wind: 10 km/h</li>
        </ul>
      </div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-50"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
