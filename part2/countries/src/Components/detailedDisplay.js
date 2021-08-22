import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const DetailedDisplay=({filteredCountries})=>{

    
    const [currWeather,setCurrWeather]=useState('')
    const [loadingState,setLoadingState]=useState(true)

    useEffect(()=>{
        axios.get('http://api.weatherstack.com/current?access_key=dcdde9ec64fb60150081c2c4d7fd5c97&query='+filteredCountries.capital.toLowerCase()).then((response)=>{
        const temp = response    
        setCurrWeather(temp)
        setLoadingState(false)
        })
    },[])

    return(
        <div>
            <h2><strong>{filteredCountries.name}</strong></h2>
            <div>
                <li key={'Cap'}>Capital: {filteredCountries.capital}</li>
                <li key={'Pop'}>Population: {filteredCountries.population}</li>
            </div>

            <h3><strong>Languages</strong></h3>
            <div>
                <ul>
                    {filteredCountries.languages.map((lang)=><li key={lang.name}>{lang.name}</li>)}
                </ul>
            </div>

            <div>
                <img src={filteredCountries.flag} alt={''} width="150" height="100"/>
            </div>
            
            <h3>Weather in {filteredCountries.capital}</h3>
            <div>
                <Weather loading={loadingState} weather={currWeather}/>
            </div>
            
        </div>
    )
}

export default DetailedDisplay