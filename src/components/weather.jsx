import React from 'react'

const Weather = ({weather}) => {
  return (
    <div>
      
      <h2>{weather.name}</h2>

      <h1>
        {Math.round(weather.main.temp)}°C
      </h1>

      <p>
        {weather.weather[0].description}
      </p>

      <p>
        Humidity: {weather.main.humidity}%
      </p>

      <p>
        Wind: {weather.wind.speed} m/s
      </p>

    </div>
  )
}

export default Weather
