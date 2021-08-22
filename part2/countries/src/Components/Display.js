import React from 'react'
import CountryInfo from './CountryInfo'
import DetailedDisplay from './detailedDisplay'


const Display=({countryData,newCountry})=>{
    if(newCountry.length === 0){
        return(<div></div>)
    }else{
        let filteredCountries = countryData.filter(country =>{
            if(country.name.toLowerCase().includes(newCountry.toLowerCase())){
                return country.name
            }
            return null
        })

        if(filteredCountries.length >10){
            return("Too many matches, specify another filter")
        }else if(filteredCountries.length>1 && filteredCountries.length<10){
            return filteredCountries.map(country=><CountryInfo key={country.name} country={country}/>)
        }else if(filteredCountries.length === 1){
            return (<DetailedDisplay filteredCountries={filteredCountries[0]}/>)
        }
    }
    return(<div></div>)
}

export default Display
