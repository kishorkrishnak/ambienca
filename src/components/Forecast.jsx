import React from "react";
import styled from "styled-components";
import moment from "moment";
function Forecast({ data }) {
  const currentWeather = data.forecast.forecastday[0].hour;

  return (
    <StyledForecast>
      <h1 style={{ display: "inline", fontSize: "40px", marginLeft: 5 }}>
        Current Weather
      </h1>
      <div>
        <h4 style={{ fontSize: "23px", fontWeight: "bold", marginLeft: 5 }}>
          {moment(currentWeather.time).format("dddd")}
        </h4>
        <span style={{ fontSize: "22px", fontWeight: "bold", marginLeft: 5 }}>
          {moment(currentWeather.time).format("L")}
        </span>
      </div>
      <div
        className="box-shadow current-forecast"
        style={{ marginTop: "10px" }}
      >
        {currentWeather.map((weather) => (
          <div key={weather.time_epoch} className="card box-shadow">
            <span>{moment(weather.time).format("h:mm a")}</span>
            <img src={weather.condition.icon} alt="weather icon" />
            <p>{weather.temp_c} °C</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "40px", marginLeft: 5 }}>Future Forecast</h2>

      {data.forecast.forecastday.map((futureWeather) => (
        <div className="future-forecast" key={futureWeather.date_epoch}>
          <h4 style={{ fontSize: "23px", fontWeight: "bold", marginLeft: 5 }}>
            {moment(futureWeather.date).format("dddd")}
          </h4>
          <span style={{ fontSize: "22px", fontWeight: "bold", marginLeft: 5 }}>
            {moment(futureWeather.date).format("L")}
          </span>
          <div className="box-shadow current-forecast">
            {futureWeather.hour.map((weather) => (
              <div key={weather.time_epoch} className="card box-shadow">
                <span>{moment(weather.time).format("h:mm a")}</span>

                <span>{weather.date}</span>
                <img src={weather.condition.icon} alt="weather icon" />
                <p>{weather.temp_c} °C</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledForecast>
  );
}

const StyledForecast = styled.div`
  margin-top: 40px;
  h2 {
    margin: 20px 0;
  }
  .current-forecast {
    display: flex;
    overflow-y: hidden;
    padding: 20px;

    .card {
      padding: 10px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #303134;
      color: white;

      span {
        font-size: 0.9rem;
        text-align: center;
      }
    }
    ::-webkit-scrollbar {
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .future-forecast {
    margin: 20px 0;
  }
`;
export default Forecast;
