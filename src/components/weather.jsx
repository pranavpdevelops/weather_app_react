function Weather({ weather }) {

  const icon = weather?.weather[0].icon

  const iconUrl =
    `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <div className="mt-10">

      <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-10 text-center text-white">

          <p className="text-blue-100 uppercase tracking-widest text-sm">
            Current Weather
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {weather.name}
          </h2>

          <p className="text-blue-100 mt-1">
            {weather.sys.country}
          </p>

          <img
            src={iconUrl}
            alt={weather.weather[0].description}
            className="w-32 h-32 mx-auto"
          />

          <h1 className="text-7xl md:text-8xl font-extrabold">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="text-2xl capitalize mt-2">
            {weather.weather[0].description}
          </p>

          <p className="text-blue-100 mt-2">
            Feels like {Math.round(weather.main.feels_like)}°C
          </p>

        </div>

        <div className="bg-white/10 border-t border-white/20 grid grid-cols-2 md:grid-cols-4">
          <div className="p-6 text-center text-white border-r border-white/20">

            <div className="text-3xl mb-2">
              💧
            </div>

            <p className="text-blue-100 text-sm">
              Humidity
            </p>

            <p className="text-xl font-bold mt-1">
              {weather.main.humidity}%
            </p>

          </div>

          <div className="p-6 text-center text-white md:border-r border-white/20">

            <div className="text-3xl mb-2">
              💨
            </div>

            <p className="text-blue-100 text-sm">
              Wind
            </p>

            <p className="text-xl font-bold mt-1">
              {weather.wind.speed} m/s
            </p>

          </div>
          <div className="p-6 text-center text-white border-r border-white/20 border-t md:border-t-0">

            <div className="text-3xl mb-2">
              🌡️
            </div>

            <p className="text-blue-100 text-sm">
              Pressure
            </p>

            <p className="text-xl font-bold mt-1">
              {weather.main.pressure} hPa
            </p>

          </div>
          <div className="p-6 text-center text-white border-t md:border-t-0">

            <div className="text-3xl mb-2">
              👁️
            </div>

            <p className="text-blue-100 text-sm">
              Visibility
            </p>

            <p className="text-xl font-bold mt-1">
              {weather.visibility
                ? `${weather.visibility / 1000} km`
                : "N/A"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Weather