import React,{useState} from 'react'
import DetailedDisplay from './detailedDisplay'

const CountryInfo = ({country})=>{
    
    const [showState,setShowState]=useState(false)

    const handleButtonState=()=>{
        setShowState(true)
    }
    return (<div><button onClick={handleButtonState}>show</button>{showState?<DetailedDisplay filteredCountries={country} />:<li>{country.name}</li>}</div>)
    

    
}

export default CountryInfo