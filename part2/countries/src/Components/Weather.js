import React from 'react'

const Weather=({loading,weather})=>{
    if(loading){
        return (<div></div>)
    }else{
        return(
            <div>
                {console.log(weather.data.current.temperature)}
                <li><strong>Temperature</strong> is: {weather.data.current.temperature} C</li>
                <li><img src={weather.data.current.weather_icons[0]}/></li>
                <li><strong>Wind: </strong>{weather.data.current.wind_speed} mph direction {weather.data.current.wind_dir}</li>
            </div>
        )
    }
}

export default Weather