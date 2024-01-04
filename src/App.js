
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data,setData]= useState({})
  const [location,setLocation]= useState('')

  const apikey = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6f6a0174bfcfff54d6cdb04527b41178`

  const searchLocation= (event) => {
    if(event.key==='Enter'){
      axios.get(apikey).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="App">
      <div className='search'>
        <input  
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation} 
        type='text'
        placeholder='Enter the city'/>
        
      </div>
      <div className="container">
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
            <p className='bold'>City</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
            <p className='bold'>Temp</p>
          </div>
          <div className='description'>
            {data.weather ? <p className='bold'>{data.weather[0].main}</p> : null}
            
          </div>
        </div>
        
        
        {data.name !=undefined &&
          <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
            
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>20%</p>
            
          </div>
          <div className='wind-speed'>
          {data.wind ? <p className='bold'>{data.wind.speed}KMPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
        }

        

      
      </div>
    </div>
  );
}

export default App;
