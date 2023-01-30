import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [grades, setGrades] = useState()
  const [loading, setloading] = useState(true)
  useEffect(()=>{
   
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  },[])
  useEffect(()=>{
    if(coords){
      const apiKey = `a78583c0fbec04a39623e8ecd8e244f8`
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
      .then(result => {
        setWeather(result.data)
      })
        
      .catch(err =>{
        console.log(err)
      })
      .finally(()=>{
        setloading(false)
      })
    }
  },[coords])
      
 useEffect(()=>{
  if(weather){
    const obj = {
      celcius: weather?.main.temp - 273.15,
      fahrenheit: (weather?.main.temp - 273.15) * 1.8000 + 32.00
    }
    setGrades(obj)
  }
 },[weather])   

  
  return (
    <div className="App">
    {  
    loading ? 
      <div>loading</div>
      :
      <WeatherCard 
      weather={weather} 
      grades={grades}
      />

    }
    </div>
  )
}

export default App
