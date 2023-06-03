function OutputArea(props) {
  const aqiDesc = ["null", "Good", "Fair", "Moderate", "Poor", "Very Poor"];
  return !props.weather || !props.airPollution ? null : (
    <div className="output-area w-100 row p-0 vh-center justify-content-between">
      <div className="left-col col-12 col-sm-6 d-flex flex-column justify-content-between">
        <div className="section-1 row vh-center flex-row">
          <div className="section-1-data col-6 h-100 vh-center">
            <div className="mb-1">{props.weather.name}</div>
            <div className="mt-1">{props.weather.main.temp} &deg;C</div>
          </div>
          <img
            className="w-icon col-6 vh-center"
            src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
          ></img>
        </div>
        <div className="section-2 row vh-center flex-row p-0 justify-content-between">
          <div className="col-6 vh-center h5">
            <div className="section-2-data m-0 mb-sm-2">
              Feels like {props.weather.main.feels_like} &deg;C
            </div>
            <div className="section-2-data m-0 mt-sm-2">
              Wind {props.weather.wind.speed} km/h
            </div>
          </div>
          <div className="col-5 vh-center h5">
            <div className="section-2-data m-0 mb-sm-2">
              {props.weather.weather[0].main}
            </div>
            <div className="section-2-data m-0 mt-sm-2">
              Humidity {props.weather.main.humidity}%
            </div>
          </div>
        </div>
      </div>
      <div className="right-col col-12 col-sm-4 p-0 vh-center">
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Min. Temperature:</div>
          <div className="col-4 p-0">{props.weather.main.temp_min} &deg;C</div>
        </div>
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Max. Temperature:</div>
          <div className="col-4 p-0">{props.weather.main.temp_max} &deg;C</div>
        </div>
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Air Quality:</div>
          <div className="col-4 p-0">
            {aqiDesc[props.airPollution.list[0].main.aqi]}
          </div>
        </div>
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Pressure:</div>
          <div className="col-4 p-0">{props.weather.main.pressure} hPa</div>
        </div>
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Visibility:</div>
          <div className="col-4 p-0">{props.weather.visibility} m</div>
        </div>
        <div
          className={`row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2 ${
            props.theme ? "night-ulined" : "ulined"
          }`}
        >
          <div className="col-8 p-0">Sunrise:</div>
          <div className="col-4 p-0">{`${new Date(
            props.weather.sys.sunrise * 1000
          ).getHours()}:${new Date(
            props.weather.sys.sunrise * 1000
          ).getMinutes()}:${new Date(
            props.weather.sys.sunrise * 1000
          ).getSeconds()}`}</div>
        </div>
        <div className="row w-100 vh-center flex-row justify-content-around p-0 my-1 pb-2">
          <div className="col-8 p-0">Sunset:</div>
          <div className="col-4 p-0">{`${new Date(
            props.weather.sys.sunset * 1000
          ).getHours()}:${new Date(
            props.weather.sys.sunset * 1000
          ).getMinutes()}:${new Date(
            props.weather.sys.sunset * 1000
          ).getSeconds()}`}</div>
        </div>
      </div>
    </div>
  );
}

export default OutputArea;
