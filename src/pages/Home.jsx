import React, { useState } from 'react'
import Weather from '../components/weather'

const Home = () => {
   const [city,setCity]=useState("")
    const[weather,setWeather]=useState
    (null)
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
            const data = await res.json()
            setWeather(data)

        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

  return (
      <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Weather<span className="text-yellow-300">ly</span>
          </h1>
          <p className="text-blue-100 mt-3 text-lg">
            Check the weather anywhere in the world
          </p>

        </div>
        <div className="max-w-xl mx-auto">

          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/30 p-2 rounded-2xl shadow-2xl">

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            
              placeholder="Search city..."
              className="flex-1 bg-transparent text-white placeholder-white/70 px-4 py-3 outline-none text-lg"/>

            <button
              onClick={getWeather}
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition duration-200"
            >
              Search
            </button>

          </div>

        </div>
        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

            <p className="text-white mt-3">
              Getting weather...
            </p>
          </div>
        )}
        {weather && (
          <Weather weather={weather} />
        )}

      </div>

    </div>
  
  )
}

export default Home
