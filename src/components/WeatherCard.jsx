import React, { useState } from 'react'

const WeatherCard = ({weather,grades}) => {
    console.log(weather)
    console.log(grades)
    const [iscelcius, setiscelcius] = useState(true)
    const icon = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
   const handleClick =()=>{
      setiscelcius(!iscelcius)
    }
  return (
    <article className='card'>
      <h1>Wheather App</h1>
      <h3>{`Ciudad: ${weather?.name}, ${weather?.sys.country}`}</h3>
      <div className='info'>
        <div className='weather_icon'>
          <img className='icon' src={icon} alt="clima" />
          <p className='grades'>{iscelcius ? `${grades?.celcius.toFixed(2)} °C` : `${grades?.fahrenheit.toFixed(2)} °F`}</p>
        </div>
        <div className='data_weather'>
        <p>{weather?.weather[0].description}</p>
        <p>Wind speed {weather?.wind.speed} m/s</p>
        <p>Clouds {weather?.clouds.all}%</p>
        <p>pressure {weather?.main.pressure} hPa</p>
        </div>
      </div>
      <button onClick={handleClick}>change °C/°F</button>
       
    </article>
  )
}

export default WeatherCard