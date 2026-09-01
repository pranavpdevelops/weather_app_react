import React, { useState } from 'react'

const Home = () => {
   const [city,setCity]=useState("")
    const[weather,setWeather]=(null)
    const [loading, setLoading] = useState(false)
   
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    const getWeather = async()=>{
        if(!city.trim()){
            alert("please enter the city")
            return
        }

        try {
            setLoading(true)

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await res.json

            setWeather(data)

        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

  return (
    <div>
          <h1>Weather App</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={getWeather}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {weather && (
        <eather weather={weather} />
      )}

    </div>
  
  )
}

export default Home
