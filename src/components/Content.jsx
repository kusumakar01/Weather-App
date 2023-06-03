import { useEffect, useState } from "react";
import axios from "axios";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";

function Content(props) {
  const [city, setCity] = useState("delhi");
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [airPollution, setAirPollution] = useState(null);
  const API_key = "e6003447206084783ebff25daac8d6ec";
  const url0 = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`;
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim().toLowerCase()}&units=metric&appid=${API_key}`;
  const url2 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}`;

  function getLocationPromise() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function getInitialWeather() {
    getLocationPromise()
      .then((position) => {
        getWeather(url0(position.coords.latitude, position.coords.longitude));
        getAirPollution();
        setCity("");
      })
      .catch((error) => {
        console.error(error);
        getUpdate();
      });
  }

  function getWeather(url = url1) {
    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        setLat(res.data.coord.lat);
        setLon(res.data.coord.lon);
      })
      .catch((err) => {
        console.log("Weather error", err);
      });
  }

  function getAirPollution() {
    axios
      .get(url2)
      .then((res) => {
        setAirPollution(res.data);
      })
      .catch((err) => {
        console.log("Air Pollution error", err);
      });
  }

  function getUpdate() {
    getWeather();
    getAirPollution();
    setCity("");
  }

  useEffect(() => {
    getInitialWeather();
  }, []);

  return (
    <div
      className={`container px-3 py-4 vh-center justify-content-between ${
        props.theme ? "container-night" : ""
      }`}
    >
      <InputArea
        theme={props.theme}
        city={city}
        setCity={setCity}
        getUpdate={getUpdate}
      />
      <OutputArea
        theme={props.theme}
        weather={weather}
        airPollution={airPollution}
      />
    </div>
  );
}
export default Content;
