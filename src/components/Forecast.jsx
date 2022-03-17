import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
function Forecast({data}) {
    const currentWeather = data.forecast.forecastday[0].hour
  return (
    <StyledForecast>
        <h2>Current Weather</h2>
        <div  className="box-shadow current-forecast">
        {currentWeather.map((weather)=>(
            <div key={weather.time_epoch} className="card box-shadow">
                <span>{moment(weather.time).format("h:mm:ss a")}</span>
           <img src={weather.condition.icon} alt="weather icon" />
           <p>{weather.temp_c} °C</p>
            </div>
        ))}
        </div>

<h2>Future Forecast</h2>

{data.forecast.forecastday.map((futureWeather)=>(
    <div className='future-forecast' key={futureWeather.date_epoch}>
    
    <div  className="box-shadow current-forecast">
        {futureWeather.hour.map((weather)=>(
            <div key={weather.time_epoch} className="card box-shadow">
                <span>{moment(weather.time).format("h:mm:ss a")}</span>
           <img src={weather.condition.icon} alt="weather icon" />
           <p>{weather.temp_c} °C</p>
            </div>
        ))}
        </div>

    </div>
))}


    </StyledForecast>
  )
}


const StyledForecast = styled.div`
margin-top:40px;
h2{
    margin:20px 0;

}
.current-forecast{
  display:flex;
  overflow-y:hidden;
  padding:20px;

    .card{
        padding:10px;
        margin-right:20px;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#303134;
        color:white;

        span{
            font-size:.9rem;
            text-align:center;
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
    

    

    .future-forecast{
        margin:20px 0;

    }
`
export default Forecast